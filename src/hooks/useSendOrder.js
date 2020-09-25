import { useSelector, useDispatch } from 'react-redux';
import { toggleOrderModal, sendingOrder } from '../pages/Cart/actions';
import { selectCart } from '../pages/Cart/selectors';

const useSendOrder = () => {
  const dispatch = useDispatch();
  const { createOrder, sending, sendingSuccess, sendingError } = useSelector(selectCart);

  const toggleCreateOrder = () => dispatch(toggleOrderModal());
  const sendOrder = () => dispatch(sendingOrder());

  return {
    createOrder,
    sending,
    sendingSuccess,
    sendingError,
    sendOrder,
    toggleCreateOrder,
  };
};

export default useSendOrder;
