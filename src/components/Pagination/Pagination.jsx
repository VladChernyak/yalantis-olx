import React from 'react';
import { PaginationSide } from '../';
import { ChevroneIcon } from '../Icons';
import { createButtonNumbers } from '../../handlers/pagination';
import { useDispatch } from 'react-redux';
import { setProductListQuery } from '../../pages/Products/actions';
import { PAGE } from '../../constants/queries';
import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination = ({ currentPage, totalPages }) => {
  const buttons = createButtonNumbers(currentPage, totalPages);
  const dispatch = useDispatch();

  const setPage = (num) => dispatch(setProductListQuery({ [PAGE]: num }));
  const goPreviousPage = () => setPage(currentPage - 1);
  const goNextPage = () => setPage(currentPage + 1);

  return (
    <div className="pagination">
      <div className="pagination__inner">
        <button
          className="pagination__arrow-left pagination__arrow"
          disabled={currentPage === 1}
          onClick={goPreviousPage}>
          <ChevroneIcon />
        </button>
        <PaginationSide
          numbers={buttons[0]}
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setPage}
        />
        {buttons[1].length ? <div className="pagination__separator">...</div> : null}
        <PaginationSide
          numbers={buttons[1]}
          currentPage={currentPage}
          totalPages={totalPages}
          setPage={setPage}
        />
        <button
          className="pagination__arrow-right pagination__arrow"
          disabled={currentPage === totalPages}
          onClick={goNextPage}>
          <ChevroneIcon />
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
