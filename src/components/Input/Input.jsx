import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ name, value, label, type, className, onChange, onBlur }) => (
  <label className={classNames('input', { [className]: className })}>
    {label}
    <input value={value} name={name} type={type} onChange={onChange} onBlur={onBlur} />
  </label>
);

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

export default Input;
