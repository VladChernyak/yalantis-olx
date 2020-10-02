import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const PaginationSide = ({ numbers, currentPage, setPage }) => {
  return (
    <div className="pagination__side">
      {numbers.map((num) => (
        <button
          onClick={() => setPage(num)}
          key={num}
          className={classNames('pagination__page-btn', { current: num === Number(currentPage) })}>
          {num}
        </button>
      ))}
    </div>
  );
};

PaginationSide.propTypes = {
  numbers: PropTypes.array.isRequired,
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setPage: PropTypes.func.isRequired,
};

export default PaginationSide;
