import React from 'react';
import { MinusIcon, PlusIcon } from '../Icons';
import PropTypes from 'prop-types';
import './Counter.scss';

const Counter = ({ value, setCounter }) => (
  <div className="counter">
    <button
      disabled={value === 1}
      onClick={() => value !== 1 && setCounter(value - 1)}
      className="counter__button">
      <MinusIcon />
    </button>
    <span className="counter__value">{value}</span>
    <button className="counter__button" onClick={() => setCounter(value + 1)}>
      <PlusIcon />
    </button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  setCounter: PropTypes.func.isRequired,
};

export default Counter;
