import { appConstants } from "../_constants";
const initialState = {
  titlePage: 'Trang chủ hệ thống',
}

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case appConstants.SET_TITLE_PAGE:
      return {
        ...state,
        titlePage: action.payload,
      }
    default:
      return state;
  }
}