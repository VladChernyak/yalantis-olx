import React, { useContext } from 'react';
import { CartIcon, ArrowRightIcon } from '../Icons';
import CartContext from '../../context/CartContext';
import './CartWidget.scss';

const CartWidget = () => {
  const {
    cart: { total, productsCount },
  } = useContext(CartContext);

  return (
    <div className="cart-widget__wrapper">
      <div className="cart-widget">
        <div className="cart-widget__icons">
          <div className="cart-widget__icons-wrapper">
            <div className="cart-icon">
              <CartIcon />
            </div>
            <div className="arrow-icon">
              <ArrowRightIcon />
            </div>
          </div>
        </div>
        <div className="cart-widget__subtotal">
          To pay: <span>{total} $</span>
        </div>
        {productsCount ? <div className="cart-widget__products-count">{productsCount}</div> : null}
      </div>
    </div>
  );
};

export default CartWidget;
