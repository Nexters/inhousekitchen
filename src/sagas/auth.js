import { call, fork, take, select, put, cancel, takeLatest, takeEvery } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';
import _ from 'lodash';
import { SUCCESS } from '../ducks/constants';
import { types, fetchLogin } from '../ducks/auth';
import { nav } from '../ducks/nav';
import { callValue } from '../utils/ObjectUtil';

function* afterSuccessGoogleLogin({ payload: { user } }) {
  yield put(fetchLogin(user));
}

function* afterSuccessLogin() {
  yield put(NavigationActions.back());
}

function* afterSuccessSignup() {
  const { nav } = yield select();
  const route = _.find(nav.routes, route => callValue(() => route.params.auth, false));
  yield put(NavigationActions.back({
    key: route.key
  }));
}

function* afterSuccessSignout() {
  yield put(NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Main' })]
  }));
}

export default function* authSagas() {
  yield takeLatest(types.GOOGLE_LOGIN[SUCCESS], afterSuccessGoogleLogin);
  yield takeLatest(types.LOGIN[SUCCESS], afterSuccessLogin);
  yield takeLatest(types.SIGNUP[SUCCESS], afterSuccessSignup);
  yield takeLatest(types.SIGNOUT[SUCCESS], afterSuccessSignout);
}
