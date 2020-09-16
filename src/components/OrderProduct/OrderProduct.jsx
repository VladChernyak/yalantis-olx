import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './OrderProduct.scss';

const OrderProduct = ({ id, name, price, count }) => (
  <li key={id} className="order-product">
    <Link to={'/' + id}>
      <h3>{name}</h3>
    </Link>
    <div className="order-product__description">
      <div className="order-product__price">
        <div className="order-product__subtitle">for one:</div>
        {price} $
      </div>
      <div className="order-product__count">
        <div className="order-product__subtitle">in order:</div>
        {count}
      </div>
      <div className="order-product__total">
        <div className="order-product__subtitle">Total:</div> {price * count} $
      </div>
    </div>
  </li>
);

OrderProduct.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default OrderProduct;
