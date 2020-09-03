import React, { useState } from 'react';
import { Button } from '../';
import { PAGE, ORIGINS, MIN_PRICE, MAX_PRICE, PER_PAGE } from '../../api/queries';
import { useDispatch } from 'react-redux';
import { setProductListQuery } from '../../store/actions/productList';
import PropTypes from 'prop-types';
import './SortBar.scss';

const SortBar = ({ origins, queries }) => {
  const originsFromState = queries[ORIGINS] ? queries[ORIGINS].split(',') : [];
  const minPriceFromState = queries.minPrice ? queries.minPrice : '';
  const maxPriceFromState = queries.maxPrice ? queries.maxPrice : '';
  const perPageFromState = queries.perPage ? queries.perPage : 50;

  const [checkedOrigins, setOrigin] = useState(originsFromState);
  const [minPrice, setMinPrice] = useState(minPriceFromState);
  const [maxPrice, setMaxPrice] = useState(maxPriceFromState);
  const [perPage, setPerPage] = useState(perPageFromState);

  const dispatch = useDispatch();

  return (
    <div className="sort-bar">
      <h3 className="sort-bar__title">Sort by:</h3>
      <div className="sort-bar__filters">
        <div className="sort-bar__origin sort-bar__filter">
          <div className="sort-bar__filter-title">Product origin</div>
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
        </div>
        <div className="sort-bar__prices sort-bar__filter">
          <div className="sort-bar__filter-title">Prices</div>
          <div className="sort-bar__prices-div">
            <label>
              Min price:
              <input
                type="number"
                value={minPrice}
                onChange={({ target: { value } }) => setMinPrice(value)}
              />
            </label>
            <label>
              Max price:
              <input
                type="number"
                value={maxPrice}
                onChange={({ target: { value } }) => setMaxPrice(value)}
              />
            </label>
          </div>
        </div>
        <div className="sort-bar__per-page sort-bar__filter">
          <div className="sort-bar__filter-title">Products per page</div>
          <select
            className="sort-bar__per-page-select"
            value={perPage}
            onChange={({ target: { value } }) => setPerPage(value)}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <Button
          onClick={() =>
            dispatch(
              setProductListQuery({
                [PAGE]: 1,
                [ORIGINS]: checkedOrigins.join(','),
                [MAX_PRICE]: maxPrice,
                [MIN_PRICE]: minPrice,
                [PER_PAGE]: perPage,
              }),
            )
          }>
          Confirm
        </Button>
      </div>
    </div>
  );
};

SortBar.propTypes = {
  origins: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string.isRequired,
      queries: PropTypes.shape({
        [PAGE]: PropTypes.string.isRequired,
        [ORIGINS]: PropTypes.string.isRequired,
        [MIN_PRICE]: PropTypes.string.isRequired,
        [MAX_PRICE]: PropTypes.string.isRequired,
        [PER_PAGE]: PropTypes.string.isRequired,
      }),
    }),
  ),
};

export default SortBar;