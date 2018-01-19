import {
  call,
  fork,
  take,
  select,
  put,
  cancel,
  takeLatest,
} from 'redux-saga/effects';
  
export function* fetchEntity(entity, apiFn, ...args) {
  yield put(entity.fetch());
  try {
    const result = yield call(apiFn, ...args);
    yield put(entity.success(result));
  } catch (err) {
    yield put(entity.failure(err));
  }
}