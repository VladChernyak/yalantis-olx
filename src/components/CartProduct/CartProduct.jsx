import React from 'react';
import { useDispatch } from 'react-redux';
import { Counter } from '../';
import { TrashIcon } from '../Icons';
import { changeCart, deleteProductFromCart } from '../../pages/Cart/actions';
import PropTypes from 'prop-types';
import './CartProduct.scss';

const CartProduct = ({ name, id, price, count }) => {
  const dispatch = useDispatch();
  const changeProduct = (productData) => dispatch(changeCart(productData));
  const deleteProduct = () => dispatch(deleteProductFromCart(id));

  return (
    <li className="cart-product">
      <div className="cart-product__description">
        <h3 className="cart-product__name">{name}</h3>
        <span className="cart-product__id">{id}</span>
      </div>
      <Counter
        value={count}
        setCounter={(value) => changeProduct({ name, id, price, count: value })}
      />
      <div className="cart-product__total-price">{price * count} $</div>
      <button className="cart-product__remove" onClick={deleteProduct}>
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
