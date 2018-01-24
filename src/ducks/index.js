import { combineReducers } from 'redux';
import { reducers as auth } from './auth';
import { reducers as load } from './load';

export const reducers = combineReducers({
  auth,
  load
});
