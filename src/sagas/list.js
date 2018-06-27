import { put, takeLatest, all } from 'redux-saga/effects';
import * as LIST_ACTIONS from '../actions/list';
import data from '../todos.json';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* onFetch() {
  yield delay(3000);
  yield put({
    type: LIST_ACTIONS.FETCH_LIST_SUCCESS,
    payload: {
      data: data.instructions,
    },
  });
}

function listSaga() {
  return all([
    takeLatest(LIST_ACTIONS.FETCH_LIST_PENDING, onFetch),
  ]);
}

export default listSaga;
