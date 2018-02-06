import {
  call,
  fork,
  take,
  select,
  put,
  cancel,
  takeLatest,
} from 'redux-saga/effects';
import _ from 'lodash';
import { FAILURE, FETCH, LOADING, SUCCESS } from '../ducks/constants';
import { action } from '../ducks/actionHelper';

function* doLoading({ loading }) {
  // proccess Loading
  console.log(`do loading : ${loading}`);
  yield put(action(LOADING, { loading }));
}

export default function* watchLoading() {
  yield takeLatest(
    action =>
      _.reduce(
        [FETCH],
        (state, type) => state || new RegExp(`^${type}_`).test(action.type),
        false,
      ),
    _.partial(doLoading, { loading: true }),
  );
  yield takeLatest(
    action =>
      _.reduce(
        [SUCCESS, FAILURE],
        (state, type) => state || new RegExp(`^${type}_`).test(action.type),
        false,
      ),
    _.partial(doLoading, { loading: false }),
  );
}
