import { createSlice } from "@reduxjs/toolkit";
import authServices from "../appwrite/auth";
import { loginCH } from "./customHooks";
const initialState = {
  isLogin: true,
  userdata: null,
  errorMessage: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      authServices
        .createAccount({
          email: action.payload.email,
          password: action.payload.password,
          name: action.payload.name,
        })
        .then(
          (res) => {
            console.log("res", res);
          },
          (rej) => {
            console.log("rej", rej);
            // state.errorMessage = rej.message;
          }
        );
    },

    login: (state, action) => {
      const d = authServices
        .login({
          email: action.payload.email,
          password: action.payload.password,
        })
        .then(
          (res) => {
            state.userdata = res;
            state.isLogin = true;
          },
          (rej) => {
            console.log("rej", rej);
            // state.errorMessage = rej.message;
          }
        );
    },
    logout: (state) => {
      state.status = false;
      state.userdata = null;
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
