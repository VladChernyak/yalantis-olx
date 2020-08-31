import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, CartContextProvider } from './components';
import { Products, ProductPage, Cart } from './pages';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartContextProvider>
          <Route path="/" component={Header} />
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/:id" component={ProductPage} />
            <Route path="/" component={Products} />
          </Switch>
        </CartContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
