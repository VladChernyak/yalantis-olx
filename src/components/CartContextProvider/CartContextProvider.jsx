import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartContext from '../../context/CartContext';
import { selectCart } from '../../store/selectors';
import { changeCart, deleteProductFromCart } from '../../store/actions/cart';
import PropTypes from 'prop-types';

const CartContextProvider = ({ children }) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const changeProduct = (productData) => dispatch(changeCart(productData));
  const deleteProduct = (productId) => dispatch(deleteProductFromCart(productId));

  return (
    <CartContext.Provider value={{ cart, changeProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.array]),
};

export default CartContextProvider;
