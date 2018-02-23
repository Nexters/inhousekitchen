import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import _ from 'lodash';
import { Navigator } from '../navigators/AppNavigator';
import { createReducer } from './reducerHelper';

const getCurrentRoute = state => {
  const route = state.routes[state.index];
  return typeof route.index === 'undefined' ? route : getCurrentRouteName(route);
};

const getCurrentRouteName = state => getCurrentRoute(state).routeName;
export const getCurrentKey = state => getCurrentRoute(state).key;

export const reducers = (state, action) => {
  if (state && action.type === NavigationActions.SET_PARAMS) {
    return {
      ...state,
      routes: _.map(
        state.routes,
        route =>
          (route.key === action.key
            ? {
              ...route,
              params: {
                ...route.params,
                ...action.params
              }
            }
            : route)
      )
    };
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  const nextState = Navigator.router.getStateForAction(action, state);
  // console.log(state, action);
  // prevents navigating twice to the same route
  if (state && nextState) {
    const stateRouteName = getCurrentRouteName(state);
    const nextStateRouteName = getCurrentRouteName(nextState);
    return stateRouteName === nextStateRouteName ? state : nextState;
  }
  return nextState || state;
};

function setParams(state, { key, params }) {}
