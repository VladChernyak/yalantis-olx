import {
  PRODUCT_MODAL_FAILURE,
  PRODUCT_MODAL_REQUEST,
  PRODUCT_MODAL_RESET,
  PRODUCT_MODAL_SUCCESS,
  PRODUCT_MODAL_TOGGLE,
  PRODUCT_MODAL_CHANGE_PRODUCT,
  PRODUCT_FORM_GET_ORIGINS_ERROR,
  PRODUCT_FORM_GET_ORIGINS,
  PRODUCT_FORM_GET_ORIGINS_SUCCESS,
} from './actionTypes';

export const productModalToggle = () => ({
  type: PRODUCT_MODAL_TOGGLE,
});

export const productFormGetOrigins = () => ({
  type: PRODUCT_FORM_GET_ORIGINS,
});

export const productFormGetOriginsSuccess = (origins) => ({
  type: PRODUCT_FORM_GET_ORIGINS_SUCCESS,
  payload: { origins },
});

export const productFormGetOriginsError = () => ({
  type: PRODUCT_FORM_GET_ORIGINS_ERROR,
});

export const productModalRequest = (data, productId) => ({
  type: PRODUCT_MODAL_REQUEST,
  payload: { data, productId },
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
