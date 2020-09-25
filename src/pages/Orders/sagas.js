import { call, put, takeEvery } from 'redux-saga/effects';
import { ORDERS_LINK } from '../../api/apiLinks';
import { sendRequest } from '../../api/requests';
import { getOrderFailure } from '../OrderPage/actions';
import { getOrdersSuccess } from './actions';
import { GET_ORDERS } from './actionTypes';

function* workOrders() {
  try {
    const {
      data: { items },
    } = yield call(sendRequest, ORDERS_LINK);

    yield put(getOrdersSuccess(items));
  } catch {
    yield put(getOrderFailure());
  }
}

export default function* watchOrders() {
  yield takeEvery(GET_ORDERS, workOrders);
}
