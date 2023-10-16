import { userConstants } from "../_constants";

export const setUser = (user) => {
  return {
    type: userConstants.SET_USER,
    payload: user,
  };
};

export const setRoleUser = (role) => {
  return {
    type: userConstants.SET_ROLE_USER,
    payload: role,
  };
};

export const setLoggedIn = (LoggedIn) => {
  return {
    type: userConstants.SET_LOGGED_IN,
    payload: LoggedIn,
  };
};