import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, AddToCartIcon } from '../Icons';
import CartContext from '../../context/CartContext';
import PropTypes from 'prop-types';
import './ProductCard.scss';

const ProductCard = ({ name, price, origin, id, changePopUp }) => {
  const { cart } = useContext(CartContext);

  const isInCart = cart.products[id];

  return (
    <div className={'product-card' + (isInCart ? ' in-cart' : '')}>
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

export default ProductCard;
