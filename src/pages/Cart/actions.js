import { CART_CHANGE, CART_TOGGLE_ORDER_MODAL, CART_DELETE_PRODUCT, CART_SENDING_ORDER_FAILURE, CART_SENDING_ORDER_SUCCESS, CART_SEND_ORDER } from './actionTypes';

export const changeCart = (productData) => ({
  type: CART_CHANGE,
  payload: { data: productData },
});

export const deleteProductFromCart = (productId) => ({
  type: CART_DELETE_PRODUCT,
  payload: { id: productId },
});

export const toggleOrderModal = () => ({
  type: CART_TOGGLE_ORDER_MODAL,
})

export const sendingOrder = () => ({
  type: CART_SEND_ORDER,
})

export const sendingOrderSuccess = (orderId) => ({
  type: CART_SENDING_ORDER_SUCCESS,
  payload: { orderId },
})

export const sendingOrderFailure = (error) => ({
  type: CART_SENDING_ORDER_FAILURE,
  payload: { error },
})