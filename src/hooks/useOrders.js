import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectOrders } from '../pages/Orders/selectors';
import { getOrders, ordersReset } from '../pages/Orders/actions';

const useOrders = () => {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector(selectOrders);

  useEffect(() => {
    dispatch(getOrders());

    return () => dispatch(ordersReset());
  }, [dispatch]);

  return {
    loading,
    error,
    orders,
  };
};

export default useOrders;
