import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import todoSlice from "./todoSlice";
export default combineReducers({
  authSlice,
  todoSlice,
});
