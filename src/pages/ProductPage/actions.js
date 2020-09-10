import { PRODUCT_BY_ID_SUCCSESS, PRODUCT_BY_ID_FAILURE, PRODUCT_BY_ID_RESET } from './actionTypes';

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
