import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PAGE, ORIGINS, MAX_PRICE, MIN_PRICE, PER_PAGE } from '../constants/queries';
import { getUrl } from '../handlers/requests';

const useSortBar = (queries) => {
  const {
    location: { pathname, search },
    push,
  } = useHistory();

  const originsFromUrl = queries[ORIGINS] ? queries[ORIGINS].split(',') : [];
  const minPriceFromUrl = queries[MIN_PRICE] ? queries[MIN_PRICE] : '';
  const maxPriceFromUrl = queries[MAX_PRICE] ? queries[MAX_PRICE] : '';
  const perPageFromUrl = queries[PER_PAGE] ? queries[PER_PAGE] : 50;

  const [checkedOrigins, setOrigin] = useState(originsFromUrl);
  const [minPrice, setMinPrice] = useState(minPriceFromUrl);
  const [maxPrice, setMaxPrice] = useState(maxPriceFromUrl);
  const [perPage, setPerPage] = useState(perPageFromUrl);

  useEffect(() => {
    setOrigin(originsFromUrl);
    setMinPrice(minPriceFromUrl);
    setMaxPrice(maxPriceFromUrl);
    setPerPage(perPageFromUrl);

    // eslint-disable-next-line
  }, [search]);

  const confirmQueries = () => {
    push(
      getUrl(pathname, {
        [PAGE]: 1,
        [ORIGINS]: checkedOrigins.join(','),
        [MAX_PRICE]: maxPrice,
        [MIN_PRICE]: minPrice,
        [PER_PAGE]: perPage,
      }),
    );
  };

  return {
    checkedOrigins,
    minPrice,
    maxPrice,
    perPage,
    setOrigin,
    setMinPrice,
    setMaxPrice,
    setPerPage,
    confirmQueries,
  };
};

export default useSortBar;
