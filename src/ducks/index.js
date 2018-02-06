import { combineReducers } from 'redux';
import { reducers as auth } from './auth';
import { reducers as load } from './load';
import { reducers as host } from './host';

export const reducers = combineReducers({
  auth,
  load,
  host,
});
