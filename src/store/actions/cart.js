import { CHANGE_PRODUCT_IN_CART, DELETE_PRODUCT_FROM_CART } from './actionTypes';

export const changeCart = (productData) => ({
  type: CHANGE_PRODUCT_IN_CART,
  payload: { data: productData },
});

export const deleteProductFromCart = (productId) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: { id: productId },
});
