import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../';
import { getOrderTotalPrice } from '../../handlers/order';
import { getDateTimeString } from '../../handlers/product';
import PropTypes from 'prop-types';
import './OrderItem.scss';

const OrderItem = ({ createdAt, id, pieces }) => (
  <li className="order-item">
    <div className="order-item-date">
      <div className="order-item__subtitle">Order date:</div>
      <time dateTime={new Date(createdAt)}>{getDateTimeString(createdAt)}</time>
    </div>
    <div className="order-item__product-count">
      <div className="order-item__subtitle">Products in order:</div>
      {pieces.reduce((sum, item) => (sum += item.count), 0)}
    </div>
    <div className="order-item__total">
      <div className="order-item__subtitle">Order price:</div>
      {getOrderTotalPrice(pieces)} $
    </div>
    <Link to={'/orders/' + id}>
      <Button>More...</Button>
    </Link>
  </li>
);

OrderItem.propTypes = {
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  pieces: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default OrderItem;
