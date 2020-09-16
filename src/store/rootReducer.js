import { combineReducers } from 'redux';
import cartReducer from '../pages/Cart/reducer';
import productListReducer from '../pages/Products/reducer';
import productPageReducer from '../pages/ProductPage/reducer';
import productModalReducer from '../pages/ProductModal/reducer';
import ordersReducer from '../pages/Orders/reducer';
import orderPageReducer from '../pages/OrderPage/reducer';

export default combineReducers({
  cart: cartReducer,
  productList: productListReducer,
  productPage: productPageReducer,
  productModal: productModalReducer,
  orders: ordersReducer,
  orderPage: orderPageReducer,
});
