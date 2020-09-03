import { PAGE } from '../../api/queries';
import {
  PRODUCT_LIST_RESET,
  GET_PRODUCT_LIST_SUCCSESS,
  GET_PRODUCT_LIST_ERROR,
  SET_PRODUCT_LIST_QUERY,
  SET_PRODUCT_ORIGINS,
  RESET_PRODUCT_LIST_QUERIES,
} from '../actions/actionTypes';

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
    case GET_PRODUCT_LIST_SUCCSESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        totalPages: action.payload.totalPages,
      };
    case GET_PRODUCT_LIST_ERROR:
      return { ...state, loading: false, error: true };
    case SET_PRODUCT_LIST_QUERY:
      return { ...state, queries: { ...state.queries, ...action.payload } };
    case RESET_PRODUCT_LIST_QUERIES:
      return { ...state, queries: { [PAGE]: 1 } };
    case SET_PRODUCT_ORIGINS:
      return { ...state, origins: action.payload.origins };
    case PRODUCT_LIST_RESET:
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
};

export default productListReducer;
