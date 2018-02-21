import { call, fork, take, select, put, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';
import { NavigationActions } from 'react-navigation';
import { FAILURE, FETCH, LOADED, SUCCESS } from '../ducks/constants';
import { types, fetchLogin } from '../ducks/auth';

function* afterSuccessGoogleLogin({ payload: { user } }) {
  yield put(fetchLogin(user));
}

function* afterSuccessSignup() {
  yield put(NavigationActions.navigate({
    routeName: 'Login'
  }));
  // navigate LOGIN
}

export default function* authSagas() {
  yield takeLatest(types.GOOGLE_LOGIN[SUCCESS], afterSuccessGoogleLogin);
  yield takeLatest(types.SIGNUP[SUCCESS], afterSuccessSignup);
}
