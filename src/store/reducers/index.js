import { combineReducers } from 'redux';
import productList from './productList';
import productPage from './productPage';
import cart from './cart';

const rootReducer = combineReducers({ productList, productPage, cart });

export default rootReducer;
