import {
  GET_PRODUCT_LIST_SUCCSESS,
  GET_PRODUCT_LIST_ERROR,
  PRODUCT_LIST_RESET,
  SET_PRODUCT_LIST_QUERY,
  SET_PRODUCT_ORIGINS,
  RESET_PRODUCT_LIST_QUERIES,
} from './actionTypes';

export const productListReset = () => ({
  type: PRODUCT_LIST_RESET,
});

export const getProductListSuccess = (products, totalPages) => ({
  type: GET_PRODUCT_LIST_SUCCSESS,
  payload: { products, totalPages },
});

export const getProductListError = () => ({
  type: GET_PRODUCT_LIST_ERROR,
});

export const setProductOrigins = (origins) => ({
  type: SET_PRODUCT_ORIGINS,
  payload: { origins },
});

export const setProductListQuery = (queries) => ({
  type: SET_PRODUCT_LIST_QUERY,
  payload: { ...queries },
});

export const resetProductListQueries = () => ({
  type: RESET_PRODUCT_LIST_QUERIES,
});
