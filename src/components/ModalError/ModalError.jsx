import React from 'react';
import { Button } from '../';
import PropTypes from 'prop-types';
import './ModalError.scss';

const ModalError = ({ error, onClick }) => (
  <div className="modal-error">
    <h2>Something went wrong</h2>
    <p>{error}</p>
    <Button onClick={onClick}>Try again</Button>
  </div>
);

ModalError.propTypes = {
  error: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ModalError;
