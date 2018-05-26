import { put, takeEvery, call, all } from 'redux-saga/effects';
import axios from 'axios';
import { SWITCH_NAME, GET_NAME_ASYNC } from '../actions';

const apiCall = () =>
  axios
    .get('https://uinames.com/api/')
    .then(response => response.data.name)
    .catch((err) => {
      throw err;
    });

function* getNameAsync() {
  const response = yield call(apiCall);
  yield put({ type: SWITCH_NAME, payload: response });
}

function* watchgetNameAsync() {
  yield takeEvery(GET_NAME_ASYNC, getNameAsync);
}

export default function* rootSaga() {
  yield all([watchgetNameAsync()]);
}
