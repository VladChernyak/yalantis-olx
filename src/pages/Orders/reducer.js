import { GET_ORDERS, GET_ORDERS_FAILURE, GET_ORDERS_SUCCESS, ORDERS_RESET } from './actionTypes';

const initialState = {
  orders: [],
  loading: true,
  error: false,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return { ...state, error: false, loading: true };
    case GET_ORDERS_SUCCESS:
      return { ...state, loading: false, orders: action.payload.orders };
    case GET_ORDERS_FAILURE:
      return { ...state, loading: false, error: true };
    case ORDERS_RESET:
      return initialState;
    default:
      return state;
  }
};

export default ordersReducer;
