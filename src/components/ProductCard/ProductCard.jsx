import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CheckIcon, AddToCartIcon } from '../Icons';
import { selectCart } from '../../pages/Cart/selectors';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ProductCard.scss';

const ProductCard = ({ name, price, origin, id, changePopUp }) => {
  const cart = useSelector(selectCart);

  const isInCart = cart.products[id];

  const classes = classNames('product-card', { 'in-cart': isInCart });

  return (
    <div className={classes}>
      <div className="product-card__info">
        <h3>
          <Link to={'/' + id}>{name}</Link>
        </h3>
        <div className="product-card__origin">{origin}</div>
        <div className="product-card__price">
          <span>{price}</span>$
        </div>
        {isInCart ? (
          <CheckIcon />
        ) : (
          <button
            className="add-to-cart"
            onClick={() => changePopUp({ name, price, count: 1, id })}>
            <AddToCartIcon />
          </button>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number.isRequired,
  origin: PropTypes.string,
  id: PropTypes.string.isRequired,
  changePopUp: PropTypes.func.isRequired,
};

ProductCard.defaultProps = {
  name: 'No name',
};

export default ProductCard;
