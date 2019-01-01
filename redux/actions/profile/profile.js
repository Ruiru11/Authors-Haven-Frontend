import {
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS
} from "../../../constants/profile/profile";

export const profile = payload => {
  return {
    type: PROFILE,
    payload
  };
};

export const profileSucess = payload => ({
  type: PROFILE_SUCCESS,
  payload
});

export const profilefailure = error => ({
  type: PROFILE_FAILURE,
  error
});

export const getProfile = () => {
  return {
    type: GET_PROFILE
  };
};

export const getProfileSuccess = (payload) => ({
  type: GET_PROFILE_SUCCESS,
  payload
});

export const getProfileFailure = error => ({
  type: GET_PROFILE_FAILURE,
  error
});
