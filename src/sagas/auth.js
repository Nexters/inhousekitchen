import { call, fork, take, select, put, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';
import { FAILURE, FETCH, LOADED, SUCCESS } from '../ducks/constants';
import { types, fetchLogin } from '../ducks/auth';

function* afterSuccessGoogleLogin({ payload: { user } }) {
  yield put(fetchLogin(user));
}

export default function* authSagas() {
  yield takeLatest(types.GOOGLE_LOGIN[SUCCESS], afterSuccessGoogleLogin);
}