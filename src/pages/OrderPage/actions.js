import { GET_ORDERS_FAILURE } from '../Orders/actionTypes';
import { GET_ORDER, GET_ORDER_SUCCESS, ORDER_PAGE_RESET } from './actionTypes';

export const getOrder = () => ({
  type: GET_ORDER,
});

export const getOrderSuccess = (data) => ({
  type: GET_ORDER_SUCCESS,
  payload: { data },
});

export const getOrderFailure = () => ({
  type: GET_ORDERS_FAILURE,
});

export const orderPageReset = () => ({
  type: ORDER_PAGE_RESET,
});
