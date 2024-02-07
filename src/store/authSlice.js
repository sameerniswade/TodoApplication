import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  userdata: [],
  errorMessage: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userdata = action.payload;
      state.isLogin = true;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },

    logout: (state) => {
      state.isLogin = false;
      state.userdata = null;
    },
  },
});

export const { setUserData, logout, setErrorMessage } = authSlice.actions;
export default authSlice.reducer;
