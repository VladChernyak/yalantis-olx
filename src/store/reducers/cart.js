import { addProducts, deleteProduct } from '../../handlers/cart';
import { CHANGE_PRODUCT_IN_CART, DELETE_PRODUCT_FROM_CART } from '../actions/actionTypes';

const initialState = {
  products: {},
  total: 0,
  productsCount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRODUCT_IN_CART:
      return addProducts(state, action.payload.data);
    case DELETE_PRODUCT_FROM_CART:
      return deleteProduct(state, action.payload.id);
    default:
      return state;
  }
};

export default cartReducer;
