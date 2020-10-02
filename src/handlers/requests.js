import { IS_EDITABLE, PAGE } from '../constants/queries';

export const getUrl = (url, queryParams) => {
  if (!queryParams) return url;
  if (typeof queryParams === 'string') return url + queryParams;

  const queryString = Object.entries(queryParams).reduce((string, [query, value], idx, array) => {
    const leftSide = idx === 0 ? '?' + query : query;

    if (!value) return string;

    const rightSide = idx === array.length - 1 ? value : value + '&';

    return (string += `${leftSide}=${rightSide}`);
  }, '');

  return url + queryString;
};

export const getMyProductsQueries = (queries) => {
  const queriesString = queries ? queries + '&' : '?';

  return queriesString + IS_EDITABLE + '=true';
};

export const getQueriesObject = (queriesString) => {
  const queries = { [PAGE]: 1 };

  if (queriesString) {
    const str = queriesString.substring(1, queriesString.length);

    str.split('&').forEach((query) => {
      const queryObj = query.split('=');

      queries[queryObj[0]] = queryObj[1];
    });
  }

  return queries;
};
