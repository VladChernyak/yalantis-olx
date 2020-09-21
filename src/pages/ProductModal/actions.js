import {
  PRODUCT_MODAL_FAILURE,
  PRODUCT_MODAL_REQUEST,
  PRODUCT_MODAL_RESET,
  PRODUCT_MODAL_SUCCESS,
  PRODUCT_MODAL_TOGGLE,
  PRODUCT_MODAL_CHANGE_PRODUCT,
} from './actionTypes';

export const productModalToggle = () => ({
  type: PRODUCT_MODAL_TOGGLE,
});

export const productModalRequest = () => ({
  type: PRODUCT_MODAL_REQUEST,
});

export const productModalSuccess = (id) => ({
  type: PRODUCT_MODAL_SUCCESS,
  payload: { id },
});

export const productModalFailure = (error) => ({
  type: PRODUCT_MODAL_FAILURE,
  payload: { error },
});

export const productModalChangeProduct = (data) => ({
  type: PRODUCT_MODAL_CHANGE_PRODUCT,
  payload: { data },
});

export const productModalReset = () => ({
  type: PRODUCT_MODAL_RESET,
});
