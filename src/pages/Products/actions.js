import {
  PRODUCT_LIST_SUCCSESS,
  PRODUCT_LIST_FAILURE,
  PRODUCT_LIST_RESET,
  PRODUCT_ORIGINS_REQUEST,
  PRODUCT_LIST_REQUEST,
} from './actionTypes';

export const productListRequest = (queriesString) => ({
  type: PRODUCT_LIST_REQUEST,
  payload: { queriesString },
});

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
