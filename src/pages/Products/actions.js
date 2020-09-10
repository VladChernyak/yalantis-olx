import {
  PRODUCT_LIST_SUCCSESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_RESET,
  PRODUCT_LIST_QUERIES_SET,
  PRODUCT_ORIGINS_REQUEST,
  PRODUCT_LIST_QUERIES_RESET,
} from './actionTypes';

export const productListReset = () => ({
  type: PRODUCT_LIST_RESET,
});

export const getProductListSuccess = (products, totalPages) => ({
  type: PRODUCT_LIST_SUCCSESS,
  payload: { products, totalPages },
});

export const getProductListError = () => ({
  type: PRODUCT_LIST_FAILURE,
});

export const setProductOrigins = (origins) => ({
  type: PRODUCT_ORIGINS_REQUEST,
  payload: { origins },
});

export const setProductListQuery = (queries) => ({
  type: PRODUCT_LIST_QUERIES_SET,
  payload: { ...queries },
});

export const resetProductListQueries = () => ({
  type: PRODUCT_LIST_QUERIES_RESET,
});
