import { userConstants } from "../_constants";
const initialState = {
  userId: null,
  userName: null,
  role: null,
  loggedIn: false
};

export function userReducer(state = initialState, action) {

  switch (action.type) {
    case userConstants.SET_ROLE_USER:
      return {
        ...state,
        role: action.payload,
      };
    case userConstants.SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
}