import { useSelector, useDispatch } from 'react-redux';
import { ORDERS_LINK } from '../api/apiLinks';
import { postData } from '../api/requests';
import {
  toggleOrderModal,
  sendingOrder,
  sendingOrderSuccess,
  sendingOrderFailure,
} from '../pages/Cart/actions';
import { selectCart } from '../pages/Cart/selectors';

const useSendOrder = () => {
  const dispatch = useDispatch();
  const { createOrder, sending, sendingSuccess, sendingError } = useSelector(selectCart);

  const toggleCreateOrder = () => {
    dispatch(toggleOrderModal());
  };

  const sendOrder = async (data) => {
    dispatch(sendingOrder());

    try {
      const {
        data: { id },
      } = await postData(ORDERS_LINK, data);

      dispatch(sendingOrderSuccess(id));
    } catch (error) {
      const {
        response: { data },
      } = await error;

      dispatch(sendingOrderFailure(data.error.message));
    }
  };

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
