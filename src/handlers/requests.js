export const getUrl = (url, queryParams) => {
  if (!queryParams) return url;

  const queryString = Object.entries(queryParams).reduce((string, [query, value], idx, array) => {
    const leftSide = idx === 0 ? '?' + query : query;
    const rightSide = idx === array.length - 1 ? value : value + '&';

    return (string += `${leftSide}=${rightSide}`);
  }, '');

  return url + queryString;
};
