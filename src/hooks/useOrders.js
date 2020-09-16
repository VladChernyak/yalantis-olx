import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrders } from '../pages/Orders/selectors';
import { sendRequest } from '../api/requests';
import { ORDERS_LINK } from '../api/apiLinks';
import {
  getOrders,
  getOrdersFailure,
  getOrdersSuccess,
  ordersReset,
} from '../pages/Orders/actions';

const useOrders = () => {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector(selectOrders);

  useEffect(() => {
    const getOrdersData = async () => {
      dispatch(getOrders());

      try {
        const {
          data: { items },
        } = await sendRequest(ORDERS_LINK);

        dispatch(getOrdersSuccess(items));
      } catch (e) {
        dispatch(getOrdersFailure());
      }
    };

    getOrdersData();

    return () => dispatch(ordersReset());

    // eslint-disable-next-line
  }, []);

  return {
    loading,
    error,
    orders,
  };
};

export default useOrders;
