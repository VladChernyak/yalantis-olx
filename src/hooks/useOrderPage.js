import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ORDERS_LINK } from '../api/apiLinks';
import { sendRequest } from '../api/requests';
import {
  getOrder,
  getOrderFailure,
  getOrderSuccess,
  orderPageReset,
} from '../pages/OrderPage/actions';
import { selectOrderPage } from '../pages/OrderPage/selectors';

const useOrderPage = (orderId) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectOrderPage);

  useEffect(() => {
    const getOrderData = async () => {
      dispatch(getOrder());

      try {
        const { data } = await sendRequest(ORDERS_LINK + '/' + orderId);

        dispatch(getOrderSuccess(data));
      } catch (e) {
        dispatch(getOrderFailure());
      }
    };

    getOrderData();

    return () => dispatch(orderPageReset());

    // eslint-disable-next-line
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useOrderPage;
