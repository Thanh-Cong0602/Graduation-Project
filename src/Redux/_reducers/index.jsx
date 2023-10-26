import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from './user.reducer'
import {appReducer} from './app.reducer'
const rootReducer = combineReducers({
  userReducer,
  appReducer
})

export default rootReducer