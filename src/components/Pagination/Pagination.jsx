import React from 'react';
import { PaginationSide } from '../';
import { createButtonNumbers } from '../../handlers/pagination';
import PropTypes from 'prop-types';
import './Pagination.scss';

const Pagination = ({ pagesOptions, changePages }) => {
  const buttons = createButtonNumbers(pagesOptions.current, pagesOptions.total);

  return (
    <div className="pagination">
      <div className="pagination__inner">
        <PaginationSide
          numbers={buttons[0]}
          pagesOptions={pagesOptions}
          changePages={changePages}
        />
        {buttons[1].length ? <div className="pagination__separator">...</div> : null}
        <PaginationSide
          numbers={buttons[1]}
          pagesOptions={pagesOptions}
          changePages={changePages}
        />
      </div>
    </div>
  );
};

Pagination.propTypes = {
  pagesOptions: PropTypes.object.isRequired,
  changePages: PropTypes.func.isRequired,
};

export default Pagination;
