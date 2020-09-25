import { call, put, select, takeEvery } from 'redux-saga/effects';
import { ORDERS_LINK } from '../../api/apiLinks';
import { postData } from '../../api/requests';
import { createOrderData } from '../../handlers/cart';
import { sendingOrderFailure, sendingOrderSuccess } from './actions';
import { CART_SEND_ORDER } from './actionTypes';
import { selectCartProducts } from './selectors';

function* workSendOrder() {
  const products = yield select(selectCartProducts);
  const order = createOrderData(products);

  try {
    const {
      data: { id },
    } = yield call(postData, ORDERS_LINK, order);

    yield put(sendingOrderSuccess(id));
  } catch (error) {
    const {
      response: { data },
    } = yield error;

    yield put(sendingOrderFailure(data.error.message));
  }
}

export default function* watchSendOrder() {
  yield takeEvery(CART_SEND_ORDER, workSendOrder);
}
