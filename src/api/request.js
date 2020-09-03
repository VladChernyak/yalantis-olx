import axios from 'axios';

export const sendRequest = (url, query) => {
  query = query ? '?' + createQueryString(query) : '';

  return axios.get(url + query);
};

export const createQueryString = (obj) => {
  const result = Object.entries(obj).map(([query, value]) => `${query}=${value}`);

  return result.join('&');
};
