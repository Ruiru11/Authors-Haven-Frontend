import {
  GET_VIEWS,
  GET_VIEWS_SUCCESS,
  GET_VIEWS_FAILURE
} from "../../../constants/profile/views";

export const getViews = payload => {
  return {
    type: GET_VIEWS,
    payload
  };
};

export const getViewSuccess = payload => ({
  type: GET_VIEWS_SUCCESS,
  payload
});

export const getViewsFailure = error => ({
  type: GET_VIEWS_FAILURE,
  error
});
