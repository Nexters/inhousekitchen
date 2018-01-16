import { createReducer } from "./reducerHelper";

export const types = {
  SIGNUP_REQUEST: "SIGNUP_REQUEST",
  LOGIN_REQUEST: "LOGIN_REQUEST",
  PASSWORD_RESET_REQUEST: "PASSWORD_RESET_REQUEST",
  LOGOUT: "LOGOUT"
};

const initialState = {};

export const reducers = createReducer(initialState, {});
