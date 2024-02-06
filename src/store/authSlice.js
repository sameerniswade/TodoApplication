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
      const { name, email, password } = action.payload;
      authServices
        .createAccount({
          email: email,
          password: password,
          name: name,
        })
        .then(
          (res) => {
            state.userdata = res;
          },
          (rej) => (state.errorMessage = rej.message)
        );
    },

    login: async (state, action) => {
      let a = await loginCH(action.payload.email, action.payload.password);

      console.log("a", a);
    },
    logout: (state) => {
      state.status = false;
      state.userdata = null;
    },
  },
});

export const { login, logout, signup } = authSlice.actions;
export default authSlice.reducer;
