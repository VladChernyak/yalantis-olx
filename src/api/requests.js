import axios from 'axios';
import { API_KEY } from '../api/key';

export const sendRequest = (url, query = '') =>
  axios.get(url + query, { headers: { Authorization: API_KEY } });

export const postData = (url, data) =>
  axios.post(url, data, { headers: { Authorization: API_KEY } });

export const patchData = (url, data) =>
  axios.patch(url, data, { headers: { Authorization: API_KEY } });
