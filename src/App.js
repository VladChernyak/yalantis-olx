import React, { useState } from 'react';
import { Header } from './components';
import { Products, ProductPage, Cart } from './pages';
import CartContext from './context/CartContext';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  const [cart, changeCart] = useState({ products: {}, total: 0, productsCount: 0 });

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, changeCart }}>
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/:id" component={ProductPage} />
          <Route path="/" component={Products} />
        </Switch>
      </CartContext.Provider>
    </div>
  );
}

export default App;
