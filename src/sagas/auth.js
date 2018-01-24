import { call, fork, take, select, put, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';
import { FAILURE, FETCH, LOADED, LOADING, SUCCESS } from '../ducks/constants';
import { action } from '../ducks/actionHelper';
import { types, fetchLogin } from '../ducks/auth';

function* afterSuccessGoogleLogin({ user }) {
  yield put(action(LOADED, { loaded: fetchLogin(user) }));
}

export default function* authSagas() {
  yield takeLatest(types.GOOGLE_LOGIN[SUCCESS], afterSuccessGoogleLogin);
}
