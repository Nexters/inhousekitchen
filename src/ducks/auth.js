import Expo from 'expo';
import _ from 'lodash';
import { action, createFetchTypes, createMetaOffline } from './actionHelper';
import { FAILURE, FETCH, SUCCESS } from './constants';
import agent from '../apis/agent';
import { createReducer } from './reducerHelper';

export const types = {
  LOGIN: createFetchTypes('LOGIN'),
  GOOGLE_LOGIN: createFetchTypes('GOOGLE_LOGIN'),
  LOGOUT: createFetchTypes('LOGOUT'),
  GOOGLE_LOGOUT: createFetchTypes('GOOGLE_LOGOUT'),
  TOGGLE_USER_TYPE: 'TOGGLE_USER_TYPE',
};

const loginActions = {
  fetch: action(types.LOGIN[FETCH]),
  success: action(types.LOGIN[SUCCESS]),
  failure: action(types.LOGIN[FAILURE]),
};

export const fetchLogin = googleInfo => ({
  ...loginActions.fetch,
  ...createMetaOffline({
    effect: { url: _.partial(agent.Login.login, googleInfo) },
    commit: loginActions.success,
    rollback: loginActions.failure,
  }),
});

const googleLoginActions = {
  fetch: action(types.GOOGLE_LOGIN[FETCH], { loading: true }),
  success: action(types.GOOGLE_LOGIN[SUCCESS], {
    loading: false,
    loaded: true,
  }),
  failure: action(types.GOOGLE_LOGIN[FAILURE], {
    loading: false,
    loaded: false,
  }),
};

export const fetchGoogleLogin = config => ({
  ...googleLoginActions.fetch,
  ...createMetaOffline({
    effect: { url: _.partial(Expo.Google.logInAsync, config) },
    commit: googleLoginActions.success,
    rollback: googleLoginActions.failure,
  }),
});

export const toggleUserType = () => action(types.TOGGLE_USER_TYPE);

const initialState = {
  user: {
    userType: 'GUEST', // GUEST, HOST
  },
  accessToken: '',
};

const loginReducer = {
  [types.LOGIN[SUCCESS]]: (state, { payload: { user } }) => ({
    ...state,
    user,
  }),
  [types.LOGIN[FAILURE]]: state => initialState,
};

const googleLoginReducer = {
  [types.GOOGLE_LOGIN[SUCCESS]]: (state, { payload: { accessToken } }) => ({
    ...state,
    accessToken,
  }),
  [types.GOOGLE_LOGIN[FAILURE]]: state => initialState,
};

const authReducer = {
  [types.TOGGLE_USER_TYPE]: state => ({
    ...state,
    user: {
      ...state.user,
      userType: isGuest({ auth: state }) ? 'HOST' : 'GUEST',
    },
  }),
};

export const reducers = createReducer(initialState, {
  ...loginReducer,
  ...googleLoginReducer,
  ...authReducer,
});

export const isAuth = state => !_.isEmpty(state.auth.user);
export const isGuest = state => state.auth.user.userType === 'GUEST';
