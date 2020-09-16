import { GET_ORDER, GET_ORDER_SUCCESS, GET_ORDER_FAILURE, ORDER_PAGE_RESET } from './actionTypes';

const initialState = {
  data: {},
  loading: true,
  error: false,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return { ...state, error: false, loading: true };
    case GET_ORDER_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case GET_ORDER_FAILURE:
      return { ...state, loading: false, error: true };
    case ORDER_PAGE_RESET:
      return initialState;
    default:
      return state;
  }
};

export default orderReducer;
