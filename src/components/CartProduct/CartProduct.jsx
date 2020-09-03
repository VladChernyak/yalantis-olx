import React, { useContext } from 'react';
import { Counter } from '../';
import { TrashIcon } from '../Icons';
import CartContext from '../../context/CartContext';
import PropTypes from 'prop-types';
import './CartProduct.scss';

const CartProduct = ({ name, id, price, count }) => {
  const { changeProduct, deleteProduct } = useContext(CartContext);

  return (
    <li className="cart-product">
      <div className="cart-product__description">
        <h3 className="cart-product__name">{name}</h3>
        <span className="cart-product__id">{id}</span>
      </div>
      <Counter value={count} setCounter={(v) => changeProduct({ name, id, price, count: v })} />
      <div className="cart-product__total-price">{price * count} $</div>
      <button className="cart-product__remove" onClick={() => deleteProduct(id)}>
        <TrashIcon />
      </button>
    </li>
  );
};

CartProduct.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

CartProduct.defaultProps = {
  name: 'No name',
};

export default CartProduct;
