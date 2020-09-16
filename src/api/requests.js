import axios from 'axios';
import { getUrl } from '../handlers/requests';
import { API_KEY } from '../api/key';

export const sendRequest = (url, query) =>
  axios.get(getUrl(url, query), { headers: { Authorization: API_KEY } });

export const postData = (url, data) =>
  axios.post(url, data, { headers: { Authorization: API_KEY } });

export const patchData = (url, data) =>
  axios.patch(url, data, { headers: { Authorization: API_KEY } });
