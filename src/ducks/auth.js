import Expo from 'expo';
import _ from 'lodash';
import { action, createFetchTypes } from './actionHelper';
import { FAILURE, FETCH, SUCCESS } from './constants';
import { fetchEntity } from '../sagas/sagaHelper';
import agent from './agent';
import { createReducer } from './reducerHelper';

export const types = {
  LOGIN: createFetchTypes('LOGIN'),
  GOOGLE_LOGIN: createFetchTypes('GOOGLE_LOGIN'),
  LOGOUT: createFetchTypes('LOGOUT'),
  GOOGLE_LOGOUT: createFetchTypes('GOOGLE_LOGOUT')
};

const loginEntity = {
  fetch: () => action(types.LOGIN[FETCH], { loading: true }),
  success: (response, googleInfo) => action(types.LOGIN[SUCCESS], { loading: false, loaded: true, user: googleInfo }),
  failure: error => action(types.LOGIN[FAILURE], { loading: false, loaded: false, error })
};

const googleLoginEntity = {
  fetch: () => action(types.GOOGLE_LOGIN[FETCH], { loading: true }),
  success: ({ user, accessToken }) =>
    action(types.GOOGLE_LOGIN[SUCCESS], {
      loading: false, loaded: true, user, accessToken
    }),
  failure: error => action(types.GOOGLE_LOGIN[FAILURE], { loading: false, loaded: false, error })
};

export const fetchLogin = googleInfo => fetchEntity(loginEntity, agent.Login.login, googleInfo);
export const fetchGoogleLogin = config => fetchEntity(googleLoginEntity, Expo.Google.logInAsync, config);

const initialState = {
  user: {},
  accessToken: ''
};

const loginReducer = {
  [types.LOGIN[SUCCESS]]: (state, { user }) => ({ ...state, user }),
  [types.LOGIN[FAILURE]]: state => initialState
};

const googleLoginReducer = {
  [types.GOOGLE_LOGIN[SUCCESS]]: (state, { accessToken }) => ({ ...state, accessToken }),
  [types.GOOGLE_LOGIN[FAILURE]]: state => initialState
};

export const reducers = createReducer(initialState, {
  ...loginReducer,
  ...googleLoginReducer
});

export const isAuth = state => !_.isEmpty(state.auth.user);
