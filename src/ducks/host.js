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

export const fetchHostByType = type => ({
  ...action(types.HOST[FETCH]),
  ...createMetaOffline({
    effect: { url: _.partial(agent.Host.findByType, type) },
    commit: action(types.HOST[SUCCESS]),
    rollback: action(types.HOST[FAILURE])
  })
});

const initialState = {
  NONE: []
};

const hostReducer = {
  [types.HOST[SUCCESS]]: (state, { payload: { type, hosts } }) => ({
    ...state,
    [type]: hosts
  }),
  [types.HOST[FAILURE]]: state =>
    // TODO faker data.
    initialState
};

export const reducers = createReducer(initialState, {
  ...hostReducer
});

export const findHostsByType = (state, type = 'NONE') => state.host[type];
