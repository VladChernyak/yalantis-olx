import {
  PRODUCT_LIST_RESET,
  PRODUCT_LIST_SUCCSESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_ORIGINS_REQUEST,
  PRODUCT_LIST_REQUEST,
} from './actionTypes';

const initialState = {
  products: [],
  firstLoad: true,
  loading: true,
  error: false,
  totalPages: null,
  origins: [],
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, error: false };
    case PRODUCT_LIST_SUCCSESS:
      return {
        ...state,
        loading: false,
        firstLoad: false,
        products: action.payload.products,
        totalPages: action.payload.totalPages,
      };
    case PRODUCT_LIST_FAILURE:
      return { ...state, loading: false, firstLoad: false, error: true };
    case PRODUCT_ORIGINS_REQUEST:
      return { ...state, origins: action.payload.origins };
    case PRODUCT_LIST_RESET:
      return { ...state, loading: true, error: false, firstLoad: true };
    default:
      return state;
  }
};

export default productListReducer;
