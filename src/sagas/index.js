import { all, fork } from 'redux-saga/effects';
import { types as authTypes } from '../ducks/auth';
import loaded from './loaded';
import loading from './loading';
// import { * as authSagas } from './auth';

export default function* rootSaga() {
  yield all([
    fork(loaded),
    fork(loading)
    // takeEvery(authTypes.AUTO_LOGIN, authSagas.autoLogin),
    // takeEvery(authTypes.SIGNUP_REQUEST, authSagas.signup),
    // takeEvery(authTypes.LOGIN_REQUEST, authSagas.login),
    // takeEvery(authTypes.PASSWORD_RESET_REQUEST, authSagas.resetPassword),
    // takeEvery(authTypes.LOGOUT, authSagas.logout),
  ]);
}
