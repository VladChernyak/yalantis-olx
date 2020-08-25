import React from 'react';
import { CrossIcon } from '../Icons';
import PropTypes from 'prop-types';
import './PopUp.scss';

const PopUp = ({ children, onCloseClick }) => (
  <div className="pop-up">
    <div className="pop-up__content">
      {children}
      <button className="pop-up__close" onClick={onCloseClick}>
        <CrossIcon />
      </button>
    </div>
  </div>
);

PopUp.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  onCloseClick: PropTypes.func.isRequired,
};

export default PopUp;
