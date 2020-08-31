import React, { useContext } from 'react';
import { Container, CartProduct } from '../../components';
import { CrossIcon } from '../../components/Icons';
import CartContext from '../../context/CartContext';
import './Cart.scss';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const products = Object.entries(cart.products);

  return (
    <main className="cart">
      <Container>
        <div className="cart__inner">
          <h1 className="cart__title">Cart</h1>
          {products.length ? (
            <ul className="cart__products">
              {products.map(([id, product]) => (
                <CartProduct key={id} id={id} {...product} />
              ))}
            </ul>
          ) : (
            <div className="cart__empty">
              <CrossIcon />
              <p>Cart is empty</p>
            </div>
          )}
          <div className="cart__total-payable">
            Total payable: <span>{cart.total} $</span>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Cart;
