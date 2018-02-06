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
  HOST: createFetchTypes('HOST')
};

const actions = {
  fetch: action(types.HOST[FETCH]),
  success: action(types.HOST[SUCCESS]),
  failure: action(types.HOST[FAILURE])
};

export const fetchHostByType = type => ({
  ...actions.fetch,
  ...createMetaOffline({
    effect: { url: _.partial(agent.Host.findByType, type) },
    commit: actions.success,
    rollback: actions.failure
  })
});

const initialState = {
  hosts: []
};

const hostReducer = {
  [types.HOST[SUCCESS]]: (state, { payload: { hosts } }) => ({
    ...state,
    hosts
  }),
  [types.HOST[FAILURE]]: state =>
    // TODO faker data.
    initialState
  
};

export const reducers = createReducer(initialState, {
  ...hostReducer
});

export const getHosts = state => state.host.hosts;
