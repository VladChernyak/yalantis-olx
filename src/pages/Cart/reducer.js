import { addProducts, deleteProduct } from '../../handlers/cart';
import { CART_CHANGE, CART_DELETE_PRODUCT } from './actionTypes';

const initialState = {
  products: {},
  total: 0,
  productsCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_CHANGE:
      return addProducts(state, action.payload.data);
    case CART_DELETE_PRODUCT:
      return deleteProduct(state, action.payload.id);
    default:
      return state;
  }
};

export default cartReducer;
