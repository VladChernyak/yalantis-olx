import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, onClick }) => (
  <button className="button" onClick={onClick ? onClick : null}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.array]),
  onClick: PropTypes.func,
};

export default Button;
