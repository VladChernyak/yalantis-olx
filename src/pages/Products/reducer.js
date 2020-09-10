import { PAGE } from '../../constants/queries';
import {
  PRODUCT_LIST_RESET,
  PRODUCT_LIST_SUCCSESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_QUERIES_SET,
  PRODUCT_ORIGINS_REQUEST,
  PRODUCT_LIST_QUERIES_RESET,
} from './actionTypes';

const initialState = {
  products: [],
  loading: true,
  error: false,
  totalPages: null,
  origins: [],
  queries: {
    [PAGE]: 1,
  },
};

const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_SUCCSESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        totalPages: action.payload.totalPages,
      };
    case PRODUCT_LIST_FAILURE:
      return { ...state, loading: false, error: true };
    case PRODUCT_LIST_QUERIES_SET:
      return { ...state, queries: { ...state.queries, ...action.payload } };
    case PRODUCT_LIST_QUERIES_RESET:
      return { ...state, queries: { [PAGE]: 1 } };
    case PRODUCT_ORIGINS_REQUEST:
      return { ...state, origins: action.payload.origins };
    case PRODUCT_LIST_RESET:
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
};

export default productListReducer;
