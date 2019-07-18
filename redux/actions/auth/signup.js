import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../../../constants/auth/signup";

export const signup = payload => {
  return {
    type: SIGNUP,
    payload
  };
};

export const signupsuccess = payload => ({
  type: SIGNUP_SUCCESS,
  payload
});

export const signupfailure = error => ({
  type: SIGNUP_FAILURE,
  error
});
