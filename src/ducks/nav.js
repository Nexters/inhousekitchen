import { LOADED, LOADING } from './constants';
import { createReducer } from './reducerHelper';

const initialState = {
  loading: false,
};

const loadReducer = {
  [LOADING]: (state, { loading }) => ({ ...state, loading }),
};

export const reducers = createReducer(initialState, {
  ...loadReducer,
});

export const getLoading = state => state.load.loading;
