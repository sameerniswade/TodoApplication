import authServices from "../appwrite/auth";

export const loginCH = (email, password) => {
  authServices.login({ email: email, password: password }).then(
    (res) => res,
    (rej) => rej.message
  );
};

export const signupCH = (email, password, name) => {
  authServices.createAccount(email, password, name).then(
    (res) => {
      return res;
    },
    (rej) => {
      return rej;
    }
  );
};
