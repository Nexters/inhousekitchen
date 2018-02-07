import { combineReducers } from 'redux';
import { reducers as auth } from './auth';
import { reducers as load } from './load';
import { reducers as host } from './host';
import { reducers as nav } from './nav';

export const reducers = combineReducers({
  nav,
  auth,
  load,
  host
});
