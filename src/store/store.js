import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import reducer from "./reducer";
const store = configureStore({
  reducer: reducer,
});

export default store;
