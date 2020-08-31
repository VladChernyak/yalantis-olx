import React, { useState } from 'react';
import CartContext from '../../context/CartContext';
import PropTypes from 'prop-types';

const CartContextProvider = ({ children }) => {
  const [cart, changeCart] = useState({ products: {}, total: 0, productsCount: 0 });

  return <CartContext.Provider value={{ cart, changeCart }}>{children}</CartContext.Provider>;
};

CartContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.array]),
};

export default CartContextProvider;
