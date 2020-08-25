import React from 'react';
import PropTypes from 'prop-types';

const PaginationSide = ({ numbers, pagesOptions, changePages }) => (
  <div className="pagination__side">
    {numbers.map((num) => (
      <button
        onClick={() => changePages({ ...pagesOptions, current: num })}
        key={num}
        className={num === pagesOptions.current ? 'current' : ''}>
        {num}
      </button>
    ))}
  </div>
);

PaginationSide.propTypes = {
  numbers: PropTypes.array.isRequired,
  pagesOptions: PropTypes.object.isRequired,
  changePages: PropTypes.func.isRequired,
};

export default PaginationSide;
