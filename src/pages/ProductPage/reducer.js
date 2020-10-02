import {
  PRODUCT_BY_ID_SUCCSESS,
  PRODUCT_BY_ID_FAILURE,
  PRODUCT_BY_ID_RESET,
  PRODUCT_BY_ID_REQUEST,
} from './actionTypes';

const initialState = {
  productInfo: {},
  loading: true,
  error: false,
};

const productPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_BY_ID_REQUEST:
      return { ...state, loading: true, error: false };
    case PRODUCT_BY_ID_SUCCSESS:
      return { ...state, loading: false, productInfo: action.payload.data };
    case PRODUCT_BY_ID_FAILURE:
      return { ...state, loading: false, error: true };
    case PRODUCT_BY_ID_RESET:
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
};

export default productPageReducer;
