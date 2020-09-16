import React from 'react';
import { createPortal } from 'react-dom';
import { CrossIcon } from '../Icons';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ children, onCloseClick, title }) => {
  const element = (
    <div className="modal">
      <div className="modal__content">
        <h1 className="modal__title">{title}</h1>
        {children}
        <button className="modal__close" onClick={onCloseClick}>
          <CrossIcon />
        </button>
      </div>
    </div>
  );

  return createPortal(element, document.getElementById('modal-root'));
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  onCloseClick: PropTypes.func.isRequired,
  title: PropTypes.string,
};

export default Modal;
