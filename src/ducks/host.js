import Expo from 'expo';
import _ from 'lodash';
import { action, createFetchTypes, createMetaOffline } from './actionHelper';
import { FAILURE, FETCH, SUCCESS } from './constants';
import agent from '../apis/agent';
import { createReducer } from './reducerHelper';

/**
 * host
 * type
 * user : name, profile
 * content : image
 */
// type poplurar, theme, recent

export const types = {
  HOST: createFetchTypes('HOST'),
  HOST_DETAIL: createFetchTypes('HOST_DETAIL')
};

export const fetchHostByType = type => ({
  ...action(types.HOST[FETCH]),
  ...createMetaOffline({
    effect: { url: _.partial(agent.Host.findByType, type) },
    commit: action(types.HOST[SUCCESS]),
    rollback: action(types.HOST[FAILURE])
  })
});

export const fetchHostDetail = id => ({
  ...action(types.HOST_DETAIL[FETCH]),
  ...createMetaOffline({
    effect: { url: _.partial(agent.Host.findById, id) },
    commit: action(types.HOST_DETAIL[SUCCESS]),
    rollback: action(types.HOST_DETAIL[FAILURE])
  })
});

const initialState = {
  detail: {},
  NONE: []
};

const hostReducer = {
  [types.HOST[SUCCESS]]: (state, { payload: { type, hosts } }) => ({
    ...state,
    [type]: hosts
  }),
  [types.HOST[FAILURE]]: state =>
    // TODO faker data.
    initialState,
  [types.HOST_DETAIL[SUCCESS]]: (state, { payload: { detail } }) => ({
    ...state,
    detail: {
      ...state.detail,
      [detail.id]: detail
    }
  }),
  [types.HOST_DETAIL[FAILURE]]: state =>
    // TODO faker data.
    initialState
};

export const reducers = createReducer(initialState, {
  ...hostReducer
});

export const findHostsByType = (state, type = 'NONE') => state.host[type];

export const getHostById = (state, id) => state.host.detail[id];
