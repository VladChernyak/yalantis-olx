import React from 'react';
import { AttentionIcon } from '../Icons';
import './ErrorMessage.scss';

export default () => (
  <div className="error-message">
    <div className="error-message__icon">
      <AttentionIcon />
    </div>
    <h1 className="error-message__title">Something went wrong</h1>
    <p>Please try again later</p>
  </div>
);
