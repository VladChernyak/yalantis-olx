import {
  PRODUCT_MODAL_FAILURE,
  PRODUCT_MODAL_REQUEST,
  PRODUCT_MODAL_SUCCESS,
  PRODUCT_MODAL_TOGGLE,
  PRODUCT_MODAL_RESET,
  PRODUCT_MODAL_CHANGE_PRODUCT,
  PRODUCT_FORM_GET_ORIGINS,
  PRODUCT_FORM_GET_ORIGINS_SUCCESS,
  PRODUCT_FORM_GET_ORIGINS_ERROR,
} from './actionTypes';

const initialState = {
  isOpen: false,
  loading: true,
  origins: [],
  submitting: false,
  success: false,
  error: false,
  productData: null,
};

const addNewProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_MODAL_TOGGLE:
      return { ...state, isOpen: !state.isOpen };
    case PRODUCT_FORM_GET_ORIGINS:
      return { ...state, loading: true };
    case PRODUCT_FORM_GET_ORIGINS_SUCCESS:
      return { ...state, loading: false, origins: action.payload.origins };
    case PRODUCT_FORM_GET_ORIGINS_ERROR:
      return { ...state, loading: false, error: true };
    case PRODUCT_MODAL_REQUEST:
      return { ...state, submitting: true };
    case PRODUCT_MODAL_SUCCESS:
      return { ...state, submitting: false, success: { id: action.payload.id } };
    case PRODUCT_MODAL_FAILURE:
      return { ...state, submitting: false, error: action.payload.error };
    case PRODUCT_MODAL_CHANGE_PRODUCT:
      return { ...state, isOpen: true, productData: action.payload.data };
    case PRODUCT_MODAL_RESET:
      return { ...state, error: false, success: false, submitting: false, productData: null };
    default:
      return state;
  }
};

export default addNewProductReducer;
