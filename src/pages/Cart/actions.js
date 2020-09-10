import { CART_CHANGE, CART_DELETE_PRODUCT } from './actionTypes';

export const changeCart = (productData) => ({
  type: CART_CHANGE,
  payload: { data: productData },
});

export const deleteProductFromCart = (productId) => ({
  type: CART_DELETE_PRODUCT,
  payload: { id: productId },
});
