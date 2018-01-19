import { call, fork, take, select, put, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';
import { FAILURE, FETCH, LOADED, LOADING, SUCCESS } from '../ducks/constants';
import { action } from '../ducks/actionHelper';

function* doLoaded({ loaded }) {
  yield* loaded;
}

export default function* watchLoaded() {
  yield takeEvery(LOADED, doLoaded);
}
