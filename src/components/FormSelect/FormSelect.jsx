import React from 'react';
import { Select } from '../';
import { useField } from 'formik';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './FormSelect.scss';

const FormSelect = ({ className, options, placeholder, name, value }) => {
  const [field, { touched, error }] = useField(name, value);

  return (
    <div className={classNames('form-select', { [className]: className })}>
      <Select
        placeholder={placeholder}
        options={options}
        className={error && touched ? 'error' : ''}
        {...field}
      />
      {error && touched ? <div className="form-select__error">{error}</div> : null}
    </div>
  );
};

FormSelect.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.array).isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default FormSelect;
