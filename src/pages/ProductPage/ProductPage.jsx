import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Loader, Container, Counter, Button, ErrorMessage } from '../../components';
import { CheckIcon } from '../../components/Icons';
import { getDateTimeString, setOriginName } from '../../handlers/product';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../../assets/apiLinks';
import { addProducts } from '../../handlers/cart';
import CartContext from '../../context/CartContext';
import './ProductPage.scss';

export default ({ match }) => {
  const [productInfo, setInfo] = useState(null);
  const [options, setOptions] = useState({ loading: true, error: false });
  const [counter, setCounter] = useState(1);

  const { cart, changeCart } = useContext(CartContext);

  const isInCart = productInfo ? cart.products[productInfo.id] : false;

  useEffect(() => {
    fetch(`${PRODUCTS_LINK}/${match.params.id}`)
      .then((response) => response.json())
      .then((product) => {
        return fetch(PRODUCTS_ORIGINS_LINK)
          .then((response) => response.json())
          .then(({ items }) => setOriginName(items, product));
      })
      .then((data) => {
        setInfo(data);
        setOptions({ ...options, loading: false });
      })
      .catch(() => setOptions({ ...options, loading: false, error: true }));

    // eslint-disable-next-line
  }, []);

  return (
    <main className="product">
      {options.error ? (
        <ErrorMessage />
      ) : options.loading ? (
        <Loader />
      ) : (
        <Container>
          <div className="product__content">
            <h1 className="product__name">{productInfo.name}</h1>
            <div className="product__add-to-cart">
              {isInCart ? (
                <div className="product__added">
                  <CheckIcon />
                  In cart !
                </div>
              ) : (
                <Fragment>
                  <div className="product__price">
                    Price for one: <span>{productInfo.price} $</span>
                  </div>
                  <div className="product__total-price">
                    (total: <span>{productInfo.price * counter} $</span>)
                  </div>
                  <Counter value={counter} setCounter={setCounter} />
                  <Button
                    onClick={() =>
                      changeCart(
                        addProducts(cart, {
                          name: productInfo.name,
                          id: productInfo.id,
                          count: counter,
                          price: productInfo.price,
                        }),
                      )
                    }>
                    Add to cart
                  </Button>
                </Fragment>
              )}
            </div>
            <div className="product__info">
              <h2>About this product:</h2>
              <ul className="product__options-list">
                <li>
                  Product origin: <span>{productInfo.origin}</span>
                </li>
                <li>
                  Product was created in: <span>{getDateTimeString(productInfo.createdAt)}</span>
                </li>
                <li>
                  Last change in: <span>{getDateTimeString(productInfo.updatedAt)}</span>
                </li>
                <li>
                  Product id: <span>{productInfo.id}</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      )}
    </main>
  );
};
