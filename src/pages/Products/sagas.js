import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { PRODUCTS_LINK, PRODUCTS_ORIGINS_LINK } from '../../api/apiLinks';
import { sendRequest } from '../../api/requests';
import { setOriginName } from '../../handlers/product';
import { getProductListError, getProductListSuccess, setProductOrigins } from './actions';
import { PRODUCT_LIST_REQUEST } from './actionTypes';
import { selectFirstLoad } from './selectors';

function* workProductListRequest({ payload: { queriesString } }) {
  const firstLoad = yield select(selectFirstLoad);

  if (!firstLoad) yield delay(500);

  try {
    const productList = yield call(sendRequest, PRODUCTS_LINK, queriesString);
    const origins = yield call(sendRequest, PRODUCTS_ORIGINS_LINK);

    const totalPages = Math.ceil(productList.data.totalItems / productList.data.perPage);
    const productsWithOrigin = productList.data.items.map((product) =>
      setOriginName(origins.data.items, product),
    );

    yield put(setProductOrigins(origins.data.items));
    yield put(getProductListSuccess(productsWithOrigin, totalPages));
  } catch {
    yield put(getProductListError());
  }
}

export default function* watchProductListRequest() {
  yield takeLatest(PRODUCT_LIST_REQUEST, workProductListRequest);
}
