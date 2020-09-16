import { addProducts, deleteProduct } from '../../handlers/cart';
import {
  CART_CHANGE,
  CART_TOGGLE_ORDER_MODAL,
  CART_DELETE_PRODUCT,
  CART_SENDING_ORDER_FAILURE,
  CART_SENDING_ORDER_SUCCESS,
  CART_SEND_ORDER,
} from './actionTypes';

const initialState = {
  products: {},
  total: 0,
  productsCount: 0,
  createOrder: false,
  sending: false,
  sendingSuccess: false,
  sendingError: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_CHANGE:
      return addProducts(state, action.payload.data);
    case CART_DELETE_PRODUCT:
      return deleteProduct(state, action.payload.id);
    case CART_TOGGLE_ORDER_MODAL:
      return { ...state, createOrder: !state.createOrder };
    case CART_SEND_ORDER:
      return { ...state, sending: true };
    case CART_SENDING_ORDER_SUCCESS:
      return {
        ...state,
        sendingSuccess: { orderId: action.payload.orderId },
        sending: false,
        products: {},
        total: 0,
        productsCount: 0,
      };
    case CART_SENDING_ORDER_FAILURE:
      return { ...state, sendingError: action.payload.error, sending: false };
    default:
      return state;
  }
};

export default cartReducer;
