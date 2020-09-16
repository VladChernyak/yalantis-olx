import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../';
import { CheckIcon } from '../../components/Icons';
import PropTypes from 'prop-types';
import './ModalSuccess.scss';

const ModalSuccess = ({ title, onClick, path }) => (
  <div className="modal-success">
    <h2>{title}</h2>
    <div className="modal-success__icon">
      <CheckIcon />
    </div>
    {path ? (
      <Link to={'/' + path}>
        <Button onClick={onClick}>View</Button>
      </Link>
    ) : null}
  </div>
);

ModalSuccess.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  path: PropTypes.string,
};

export default ModalSuccess;
