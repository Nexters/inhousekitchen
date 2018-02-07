import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { Navigator } from '../navigators/AppNavigator';
import { createReducer } from './reducerHelper';

const getCurrentRouteName = state => {
  const route = state.routes[state.index];
  return typeof route.index === 'undefined' ? route.routeName : getCurrentRouteName(route);
};
export const reducers = (state, action) => {
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
