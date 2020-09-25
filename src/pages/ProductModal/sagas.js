import { all, call, put, takeEvery } from 'redux-saga/effects';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../../api/apiLinks';
import { patchData, postData, sendRequest } from '../../api/requests';
import { PRODUCT_FORM_GET_ORIGINS, PRODUCT_MODAL_REQUEST } from './actionTypes';
import {
  productFormGetOriginsError,
  productFormGetOriginsSuccess,
  productModalFailure,
  productModalSuccess,
} from './actions';

function* workSendProductForm({ payload: { data, productId } }) {
  try {
    const {
      data: { id },
    } = productId
      ? yield call(patchData, PRODUCTS_LINK + '/' + productId, data)
      : yield call(postData, PRODUCTS_LINK, data);

    yield put(productModalSuccess(id));
  } catch (error) {
    const {
      response: { data },
    } = yield error;

    yield put(productModalFailure(data.error.message));
  }
}

function* workProductFormOrigins() {
  try {
    const response = yield call(sendRequest, PRODUCTS_ORIGINS_LINK);

    yield put(productFormGetOriginsSuccess(response.data.items));
  } catch {
    yield put(productFormGetOriginsError());
  }
}

function* watchProductFormOrigins() {
  yield takeEvery(PRODUCT_FORM_GET_ORIGINS, workProductFormOrigins);
}

function* watchSendProductForm() {
  yield takeEvery(PRODUCT_MODAL_REQUEST, workSendProductForm);
}

export default function* productFormSaga() {
  yield all([watchProductFormOrigins(), watchSendProductForm()]);
}
