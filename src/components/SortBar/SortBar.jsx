import React from 'react';
import { Input, Select, Button } from '../';
import { PAGE, ORIGINS, MIN_PRICE, MAX_PRICE, PER_PAGE } from '../../constants/queries';
import { perPageValues } from '../../constants/perPage';
import { useSortBar } from '../../hooks';
import PropTypes from 'prop-types';
import './SortBar.scss';

const SortBar = ({ origins, queries }) => {
  const {
    checkedOrigins,
    minPrice,
    maxPrice,
    perPage,
    setOrigin,
    setMinPrice,
    setMaxPrice,
    setPerPage,
    confirmQueries,
  } = useSortBar(queries);

  return (
    <div className="sort-bar">
      <h3 className="sort-bar__title">Sort by:</h3>
      <form className="sort-bar__filters" onSubmit={(e) => e.preventDefault()}>
        <fieldset className="sort-bar__origin sort-bar__filter">
          <legend className="sort-bar__filter-title">Product origin</legend>
          <ul className="sort-bar__origin-options">
            {origins.map(({ displayName, value }, idx) => (
              <li key={idx + value} className="sort-bar__origin-item">
                <input
                  id={idx + displayName}
                  type="checkbox"
                  value={value}
                  checked={checkedOrigins.includes(value)}
                  onChange={({ target }) =>
                    target.checked
                      ? setOrigin([...checkedOrigins, value])
                      : setOrigin(checkedOrigins.filter((val) => value !== val))
                  }
                />
                <label htmlFor={idx + displayName}>{displayName}</label>
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset className="sort-bar__prices sort-bar__filter">
          <legend className="sort-bar__filter-title">Prices</legend>
          <div className="sort-bar__prices-div">
            <Input
              type="number"
              className="sort-bar__prices-input"
              value={minPrice}
              onChange={({ target: { value } }) => setMinPrice(value)}
              label="Min price:"
            />
            <Input
              type="number"
              className="sort-bar__prices-input"
              value={maxPrice}
              onChange={({ target: { value } }) => setMaxPrice(value)}
              label="Max price:"
            />
          </div>
        </fieldset>
        <fieldset className="sort-bar__per-page sort-bar__filter">
          <legend className="sort-bar__filter-title">Products per page</legend>
          <Select
            value={perPage}
            onChange={({ target: { value } }) => setPerPage(value)}
            options={perPageValues.map((val) => [val, val])}
          />
        </fieldset>
        <Button onClick={confirmQueries}>Confirm</Button>
      </form>
    </div>
  );
};

SortBar.propTypes = {
  origins: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  queries: PropTypes.shape({
    [PAGE]: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    [ORIGINS]: PropTypes.string,
    [MIN_PRICE]: PropTypes.string,
    [MAX_PRICE]: PropTypes.string,
    [PER_PAGE]: PropTypes.string,
  }).isRequired,
};

export default SortBar;
