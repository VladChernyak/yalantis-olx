import React from 'react';
import { Input } from '../';
import { useField } from 'formik';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './FormInput.scss';

const FormInput = ({ label, name, type }) => {
  const [field, { touched, error }] = useField(name);

  return (
    <div className="form-input">
      <Input
        label={label}
        type={type}
        {...field}
        className={classNames({ error: error && touched })}
      />
      {touched && error ? <div className="form-input__error">{error}</div> : null}
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormInput;
