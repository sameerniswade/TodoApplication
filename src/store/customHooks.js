import authServices from "../appwrite/auth";

export const loginCH = async (email, password) => {
  return await authServices.login({ email: email, password: password });
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
