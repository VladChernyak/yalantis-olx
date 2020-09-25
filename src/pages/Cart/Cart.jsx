import React from 'react';
import { useSelector } from 'react-redux';
import { Container, CartProduct, Button, ToOrderModal } from '../../components';
import { CrossIcon, CartIcon } from '../../components/Icons';
import { selectCart } from './selectors';
import { useSendOrder, useInjectSaga } from '../../hooks';
import saga from './sagas';
import './Cart.scss';

const Cart = () => {
  useInjectSaga('cart', saga);

  const { products, total } = useSelector(selectCart);
  const productsArray = Object.entries(products);

  const {
    sending,
    sendingSuccess,
    sendingError,
    createOrder,
    sendOrder,
    toggleCreateOrder,
  } = useSendOrder();

  return (
    <main className="cart">
      <Container>
        <div className="cart__inner">
          <h1 className="cart__title">Cart</h1>
          {productsArray.length ? (
            <ul className="cart__products">
              {productsArray.map(([id, product]) => (
                <CartProduct key={id} id={id} {...product} />
              ))}
            </ul>
          ) : (
            <div className="cart__empty">
              <CrossIcon />
              <p>Cart is empty</p>
            </div>
          )}
          <div className="cart__to-order">
            {productsArray.length ? (
              <Button className="cart__to-order-btn" onClick={toggleCreateOrder}>
                To order <CartIcon />
              </Button>
            ) : null}
            <div className="cart__total-payable">
              Total payable: <span>{total} $</span>
            </div>
          </div>
        </div>
      </Container>
      {createOrder ? (
        <ToOrderModal
          sending={sending}
          success={sendingSuccess}
          error={sendingError}
          sendOrder={sendOrder}
          onCloseClick={toggleCreateOrder}
        />
      ) : null}
    </main>
  );
};

export default Cart;
