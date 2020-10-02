import { call, put, takeEvery } from 'redux-saga/effects';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../../api/apiLinks';
import { sendRequest } from '../../api/requests';
import { setOriginName } from '../../handlers/product';
import { getProductByIdError, getProductByIdSuccsess } from './actions';
import { PRODUCT_BY_ID_REQUEST } from './actionTypes';

function* workProductPage({ payload: { productId } }) {
  try {
    const product = yield call(sendRequest, `${PRODUCTS_LINK}/${productId}`);
    const origins = yield sendRequest(PRODUCTS_ORIGINS_LINK);

    const productWithOrigin = setOriginName(origins.data.items, product.data);

    yield put(getProductByIdSuccsess(productWithOrigin));
  } catch {
    yield put(getProductByIdError());
  }
}

export default function* watchProductPage() {
  yield takeEvery(PRODUCT_BY_ID_REQUEST, workProductPage);
}
