import { combineReducers } from 'redux';
import { reducers as auth } from './auth';

export const reducers = combineReducers({
  auth
});
