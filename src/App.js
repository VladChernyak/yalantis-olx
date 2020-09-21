import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from './components';
import { Products, ProductPage, Cart, ProductModal, Orders, OrderPage } from './pages';
import { selectProductModal } from './pages/ProductModal/selectors';
import { Switch, Route } from 'react-router-dom';
import {
  CART_PATH,
  MY_PRODUCTS_PATH,
  ORDERS_PATH,
  ORDER_PATH,
  PRODUCT_BY_ID_PATH,
  PRODUCT_LIST_PATH,
} from './constants/paths';
import './App.scss';

const App = () => {
  const { isOpen } = useSelector(selectProductModal);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={ORDER_PATH} component={OrderPage} />
        <Route path={ORDERS_PATH} component={Orders} />
        <Route path={MY_PRODUCTS_PATH} component={Products} />
        <Route path={CART_PATH} component={Cart} />
        <Route path={PRODUCT_BY_ID_PATH} component={ProductPage} />
        <Route path={PRODUCT_LIST_PATH} component={Products} />
      </Switch>
      {isOpen ? <ProductModal /> : null}
    </div>
  );
};

export default App;
