import {
  FORGOTPASSWORD,
  FORGOTPASSWORD_SUCCESS,
  FORGOTPASSWORD_FAILURE
} from "../../../constants/auth/forgotpassword";

export const forgotpass = payload => {
  return {
    type: FORGOTPASSWORD,
    payload
  };
};

export const forgotpassuccess = payload => ({
  type: FORGOTPASSWORD_SUCCESS,
  payload
});

export const forgotpassfailure = error => ({
  type: FORGOTPASSWORD_FAILURE,
  error
});
