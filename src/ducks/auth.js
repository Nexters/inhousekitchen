import Expo from 'expo';
import _ from 'lodash';
import { action, createFetchTypes, createMetaOffline } from './actionHelper';
import { FAILURE, FETCH, SUCCESS } from './constants';
import agent from './agent';
import { createReducer } from './reducerHelper';

export const types = {
  LOGIN: createFetchTypes('LOGIN'),
  GOOGLE_LOGIN: createFetchTypes('GOOGLE_LOGIN'),
  LOGOUT: createFetchTypes('LOGOUT'),
  GOOGLE_LOGOUT: createFetchTypes('GOOGLE_LOGOUT')
};

const loginActions = {
  fetch: action(types.LOGIN[FETCH], { loading: true }),
  success: action(types.LOGIN[SUCCESS], { loading: false, loaded: true }),
  failure: action(types.LOGIN[FAILURE], { loading: false, loaded: false })
};

export const fetchLogin = googleInfo => ({
  ...loginActions.fetch,
  ...createMetaOffline({
    effect: { url: _.partial(agent.Login.login, googleInfo) },
    commit: loginActions.success,
    rollback: loginActions.failure
  })
});

const googleLoginActions = {
  fetch: action(types.GOOGLE_LOGIN[FETCH], { loading: true }),
  success: action(types.GOOGLE_LOGIN[SUCCESS], {
    loading: false,
    loaded: true
  }),
  failure: action(types.GOOGLE_LOGIN[FAILURE], { loading: false, loaded: false })
};

export const fetchGoogleLogin = config => ({
  ...googleLoginActions.fetch,
  ...createMetaOffline({
    effect: { url: _.partial(Expo.Google.logInAsync, config) },
    commit: googleLoginActions.success,
    rollback: googleLoginActions.failure
  })
});

const initialState = {
  user: {},
  accessToken: ''
};

const loginReducer = {
  [types.LOGIN[SUCCESS]]: (state, { payload: { user } }) => ({ ...state, user }),
  [types.LOGIN[FAILURE]]: state => initialState
};

const googleLoginReducer = {
  [types.GOOGLE_LOGIN[SUCCESS]]: (state, {  payload: { accessToken } }) => ({ ...state, accessToken }),
  [types.GOOGLE_LOGIN[FAILURE]]: state => initialState
};

export const reducers = createReducer(initialState, {
  ...loginReducer,
  ...googleLoginReducer
});

export const isAuth = state => !_.isEmpty(state.auth.user);
