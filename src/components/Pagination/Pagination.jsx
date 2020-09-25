import React from 'react';
import { PaginationSide } from '../';
import { ChevroneIcon } from '../Icons';
import { createButtonNumbers } from '../../handlers/pagination';
import { IS_EDITABLE, MAX_PRICE, MIN_PRICE, ORIGINS, PAGE } from '../../constants/queries';
import PropTypes from 'prop-types';
import './Pagination.scss';
import { useHistory } from 'react-router-dom';
import { getUrl } from '../../handlers/requests';

const Pagination = ({ queries, totalPages }) => {
  const {
    location: { pathname },
    push,
  } = useHistory();
  const currentPage = Number(queries[PAGE]);
  const buttons = createButtonNumbers(currentPage, totalPages);

  const setPage = (num) => push(getUrl(pathname, { ...queries, [PAGE]: num }));
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
  queries: PropTypes.shape({
    [PAGE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    [MIN_PRICE]: PropTypes.string,
    [MAX_PRICE]: PropTypes.string,
    [IS_EDITABLE]: PropTypes.string,
    [ORIGINS]: PropTypes.string,
  }),
  totalPages: PropTypes.number.isRequired,
};

export default Pagination;
