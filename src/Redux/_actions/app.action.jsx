import { appConstants } from "../_constants";

export const setTitlePage = (title) => {
  return {
    type: appConstants.SET_TITLE_PAGE,
    payload: title
  };
};