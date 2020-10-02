import {
  PRODUCT_BY_ID_SUCCSESS,
  PRODUCT_BY_ID_FAILURE,
  PRODUCT_BY_ID_RESET,
  PRODUCT_BY_ID_REQUEST,
} from './actionTypes';

export const getProductById = (productId) => ({
  type: PRODUCT_BY_ID_REQUEST,
  payload: { productId },
});

export const productPageReset = () => ({
  type: PRODUCT_BY_ID_RESET,
});

export const getProductByIdSuccsess = (data) => ({
  type: PRODUCT_BY_ID_SUCCSESS,
  payload: { data },
});

export const getProductByIdError = () => ({
  type: PRODUCT_BY_ID_FAILURE,
});
