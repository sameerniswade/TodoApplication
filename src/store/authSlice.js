import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: true,
  userdata: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userdata = action.payload.userdata;
      // dispatch(setTodos(action.payload.todos));
    },
    logout: (state) => {
      state.status = false;
      state.userdata = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
