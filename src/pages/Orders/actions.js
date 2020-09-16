const {
  ORDERS_RESET,
  GET_ORDERS,
  GET_ORDERS_FAILURE,
  GET_ORDERS_SUCCESS,
} = require('./actionTypes');

export const getOrders = () => ({
  type: GET_ORDERS,
});

export const getOrdersSuccess = (orders) => ({
  type: GET_ORDERS_SUCCESS,
  payload: { orders },
});

export const getOrdersFailure = () => ({
  type: GET_ORDERS_FAILURE,
});

export const ordersReset = () => ({
  type: ORDERS_RESET,
});
