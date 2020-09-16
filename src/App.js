import React from 'react';
import { useSelector } from 'react-redux';
import { Header } from './components';
import { Products, ProductPage, Cart, ProductModal, Orders, OrderPage } from './pages';
import { selectProductModal } from './pages/ProductModal/selectors';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
  const { isOpen } = useSelector(selectProductModal);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/orders/:id" component={OrderPage} />
        <Route path="/orders" component={Orders} />
        <Route path="/my-products" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/:id" component={ProductPage} />
        <Route path="/" component={Products} />
      </Switch>
      {isOpen ? <ProductModal /> : null}
    </div>
  );
};

export default App;
