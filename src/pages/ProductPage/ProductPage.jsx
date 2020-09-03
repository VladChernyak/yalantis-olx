import React, { Fragment, useContext } from 'react';
import { Loader, Container, Counter, Button, ErrorMessage } from '../../components';
import { CheckIcon } from '../../components/Icons';
import { getDateTimeString } from '../../handlers/product';
import { useProductPage, useCounter } from '../../hooks';
import CartContext from '../../context/CartContext';
import PropTypes from 'prop-types';
import './ProductPage.scss';

const ProductPage = ({ match }) => {
  const { productInfo, loading, error } = useProductPage(match.params.id);
  const { counter, setCounter } = useCounter();

  const { cart, changeProduct } = useContext(CartContext);
  const isInCart = productInfo ? cart.products[productInfo.id] : false;

  let content;

  if (error) {
    content = <ErrorMessage />;
  } else if (loading) {
    content = <Loader />;
  } else {
    content = (
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
                    changeProduct({
                      name: productInfo.name,
                      id: productInfo.id,
                      count: counter,
                      price: productInfo.price,
                    })
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
    );
  }

  return <main className="product">{content}</main>;
};

ProductPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default ProductPage;
