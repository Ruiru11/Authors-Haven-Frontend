import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../../../constants/auth/login";

export const login = payload => {
  return {
    type: LOGIN,
    payload
  };
};

export const loginsuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginfailure = error => ({
  type: LOGIN_FAILURE,
  error
});
