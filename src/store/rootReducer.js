import { combineReducers } from 'redux';
import cartReducer from '../pages/Cart/reducer';
import productListReducer from '../pages/Products/reducer';
import productPageReducer from '../pages/ProductPage/reducer';

export default combineReducers({
  cart: cartReducer,
  productList: productListReducer,
  productPage: productPageReducer,
});
