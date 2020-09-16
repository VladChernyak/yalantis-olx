import React from 'react';
import { Formik, Form } from 'formik';
import { FormInput, FormSelect, Button, Loader } from '..';
import { useProductForm } from '../../hooks';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import './ProductForm.scss';

const ProductForm = ({ name, price, origin, id }) => {
  const { origins, loading, submitForm } = useProductForm();

  const submitButtonText = name ? 'Edit' : 'Create';

  return (
    <Formik
      initialValues={{
        name,
        price,
        origin,
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, 'Name must be at least 3 characters')
          .max(20, 'Name must be 20 characters or less')
          .required('Name is required'),
        price: Yup.number().min(1, 'Price must be positive number').required('Price is required'),
        origin: Yup.string().required('Choose one of origins'),
      })}
      onSubmit={(values) => submitForm({ product: values }, id)}>
      {loading ? (
        <Loader />
      ) : (
        ({ resetForm }) => (
          <Form className="product-form">
            <FormInput label="Product name" name="name" type="text" />
            <FormInput label="Price" name="price" type="number" />
            <FormSelect
              className="product-form__origins"
              placeholder="Choose origin"
              name="origin"
              value={origin}
              options={origins.map(({ value, displayName }) => [value, displayName])}
            />
            {name ? (
              <button className="product-form__reset" type="button" onClick={resetForm}>
                Reset changes
              </button>
            ) : null}
            <Button className="product-form__btn" type="submit">
              {submitButtonText}
            </Button>
          </Form>
        )
      )}
    </Formik>
  );
};

ProductForm.defaultProps = {
  name: '',
  price: '',
  origin: '',
};

ProductForm.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  origin: PropTypes.string.isRequired,
};

export default ProductForm;
