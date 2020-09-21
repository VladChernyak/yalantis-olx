import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = ({ onChange, onBlur, value, options, placeholder, className, name }) => (
  <select
    value={value}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    className={classNames('select', { [className]: className })}>
    {placeholder ? (
      <option className="select__placeholder" value="">
        {placeholder}
      </option>
    ) : null}
    {options.map(([val, name], idx) => (
      <option key={val + idx} value={val}>
        {name}
      </option>
    ))}
  </select>
);

Select.defaultProps = {
  value: '',
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Select;
