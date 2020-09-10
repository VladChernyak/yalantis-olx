import axios from 'axios';
import { getUrl } from '../handlers/requests';

export const sendRequest = (url, query) => axios.get(getUrl(url, query));
