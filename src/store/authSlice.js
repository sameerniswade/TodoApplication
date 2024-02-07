import { createSlice } from "@reduxjs/toolkit";
import authServices from "../appwrite/auth";

const initialState = {
  isLogin: true,
  userdata: [],
  errorMessage: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signup: (state, action) => {
      // authServices
      //   .createAccount({
      //     email: action.payload.email,
      //     password: action.payload.password,
      //     name: action.payload.name,
      //   })
      //   .then(
      //     (res) => {
      //       console.log("res", res);
      //     },
      //     (rej) => {
      //       console.log("rej", rej);
      //       // state.errorMessage = rej.message;
      //     }
      //   );
    },
    setUserData: (state, action) => {
      state.userdata = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },

    logout: (state) => {
      state.status = false;
      state.userdata = null;
    },
  },
});

export const { setUserData, logout, setErrorMessage } = authSlice.actions;
export default authSlice.reducer;
