import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../../pages/Cart/selectors';
import { CartIcon, ArrowRightIcon } from '../Icons';
import './CartWidget.scss';

const CartWidget = () => {
  const { total, productsCount } = useSelector(selectCart);

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
