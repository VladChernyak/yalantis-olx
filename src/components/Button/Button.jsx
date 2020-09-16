import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ children, onClick, className, disabled, type }) => (
  <button
    className={classNames('button', { [className]: className })}
    disabled={disabled}
    onClick={onClick}
    type={type}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.array]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
