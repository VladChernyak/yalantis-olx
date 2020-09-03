import {
  GET_PRODUCT_BY_ID_SUCCSESS,
  GET_PRODUCT_BY_ID_ERROR,
  PRODUCT_PAGE_RESET,
} from '../actions/actionTypes';

const initialState = {
  productInfo: {},
  loading: true,
  error: false,
};

const productPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_ID_SUCCSESS:
      return { ...state, loading: false, productInfo: action.payload.data };
    case GET_PRODUCT_BY_ID_ERROR:
      return { ...state, loading: false, error: true };
    case PRODUCT_PAGE_RESET:
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
};

export default productPageReducer;
