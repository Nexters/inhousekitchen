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
  SIGNUP: createFetchTypes('SIGNUP')
};

export const fetchLogin = (email, password) => ({
  ...action(types.LOGIN[FETCH]),
  ...createMetaOffline({
    effect: { url: _.partial(agent.Login.login, email, password) },
    commit: action(types.LOGIN[SUCCESS]),
    rollback: action(types.LOGIN[FAILURE])
  })
});

export const fetchGoogleLogin = config => ({
  ...action(types.GOOGLE_LOGIN[FETCH], { loading: true }),
  ...createMetaOffline({
    effect: { url: _.partial(Expo.Google.logInAsync, config) },
    commit: action(types.GOOGLE_LOGIN[SUCCESS], {
      loading: false,
      loaded: true
    }),
    rollback: action(types.GOOGLE_LOGIN[FAILURE], {
      loading: false,
      loaded: false
    })
  })
});

export const signup = (email, username, password, favors) => ({
  ...action(types.SIGNUP[FETCH]),
  ...createMetaOffline({
    effect: { url: _.partial(agent.Login.signup, email, username, password, favors) },
    commit: action(types.SIGNUP[SUCCESS]),
    rollback: action(types.SIGNUP[FAILURE])
  })
});

export const toggleUserType = () => action(types.TOGGLE_USER_TYPE);

const initialState = {
  user: {
    userType: 'GUEST' // GUEST, HOST
  },
  accessToken: ''
};

const loginReducer = {
  [types.LOGIN[SUCCESS]]: (state, { payload: { user } }) => ({
    ...state,
    user
  }),
  [types.LOGIN[FAILURE]]: state => initialState,
  [types.SIGNUP[SUCCESS]]: state => state,
  [types.SIGNUP[FAILURE]]: state => state
};

const googleLoginReducer = {
  [types.GOOGLE_LOGIN[SUCCESS]]: (state, { payload: { accessToken } }) => ({
    ...state,
    accessToken
  }),
  [types.GOOGLE_LOGIN[FAILURE]]: state => initialState
};

const authReducer = {
  [types.TOGGLE_USER_TYPE]: state => ({
    ...state,
    user: {
      ...state.user,
      userType: isGuest({ auth: state }) ? 'HOST' : 'GUEST'
    }
  })
};

export const reducers = createReducer(initialState, {
  ...loginReducer,
  ...googleLoginReducer,
  ...authReducer
});

export const isAuth = state => !_.isEmpty(state.auth.user);
export const isGuest = state => state.auth.user.userType === 'GUEST';
