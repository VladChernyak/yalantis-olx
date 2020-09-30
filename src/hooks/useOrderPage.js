import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder, orderPageReset } from '../pages/OrderPage/actions';
import { selectOrderPage } from '../pages/OrderPage/selectors';

const useOrderPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectOrderPage);
  const { id: orderId } = useParams();

  useEffect(() => {
    dispatch(getOrder(orderId));

    return () => dispatch(orderPageReset());
  }, [orderId, dispatch]);

  return {
    data,
    loading,
    error,
  };
};

export default useOrderPage;
