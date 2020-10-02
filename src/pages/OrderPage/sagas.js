import { call, put, takeEvery } from 'redux-saga/effects';
import { ORDERS_LINK } from '../../api/apiLinks';
import { sendRequest } from '../../api/requests';
import { getOrderFailure, getOrderSuccess } from './actions';
import { GET_ORDER } from './actionTypes';

function* workOrderPage({ payload: { orderId } }) {
  try {
    const { data } = yield call(sendRequest, ORDERS_LINK + '/' + orderId);

    yield put(getOrderSuccess(data));
  } catch {
    yield put(getOrderFailure());
  }
}

export default function* watchOrderPage() {
  yield takeEvery(GET_ORDER, workOrderPage);
}
