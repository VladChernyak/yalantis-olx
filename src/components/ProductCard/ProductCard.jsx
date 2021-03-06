import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CheckIcon, AddToCartIcon, EditIcon } from '../Icons';
import { selectCart } from '../../pages/Cart/selectors';
import { productModalChangeProduct } from '../../pages/ProductModal/actions';
import { PRODUCT_LIST_PATH } from '../../constants/paths';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './ProductCard.scss';

const ProductCard = ({ name, price, origin, originName, id, isEditable, changeModal }) => {
  const cart = useSelector(selectCart);
  const isInCart = cart.products[id];

  const dispatch = useDispatch();
  const onEditClick = () => dispatch(productModalChangeProduct({ name, price, origin, id }));
  const onAddToCartClick = () => changeModal({ name, price, count: 1, id });

  const classes = classNames('product-card', { 'in-cart': isInCart, 'my-product': isEditable });

  let button = isEditable ? (
    <button className="product-card__edit" onClick={onEditClick}>
      <EditIcon />
    </button>
  ) : (
    <button className="product-card__add-to-cart" onClick={onAddToCartClick}>
      <AddToCartIcon />
    </button>
  );

  return (
    <div className={classes}>
      <div className="product-card__info">
        <h3>
          <Link to={PRODUCT_LIST_PATH + id}>{name}</Link>
        </h3>
        <div className="product-card__origin">{originName}</div>
        <div className="product-card__price">
          <span>{price}</span>$
        </div>
        {isInCart ? <CheckIcon /> : button}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number.isRequired,
  originName: PropTypes.string,
  origin: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  changeModal: PropTypes.func.isRequired,
  isEditable: PropTypes.bool,
};

ProductCard.defaultProps = {
  name: 'No name',
};

export default ProductCard;
