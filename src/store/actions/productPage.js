import {
  GET_PRODUCT_BY_ID_SUCCSESS,
  GET_PRODUCT_BY_ID_ERROR,
  PRODUCT_PAGE_RESET,
} from './actionTypes';

export const productPageReset = () => ({
  type: PRODUCT_PAGE_RESET,
});

export const getProductByIdSuccsess = (data) => ({
  type: GET_PRODUCT_BY_ID_SUCCSESS,
  payload: { data },
});

export const getProductByIdError = () => ({
  type: GET_PRODUCT_BY_ID_ERROR,
});
