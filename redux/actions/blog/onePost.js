import {
  GET_ONEPOST,
  GET_ONEPOST_SUCCESS,
  GET_ONEPOST_FAILURE
} from "../../../constants/blog/onePost";

export const getOnePost = slug => {
  return {
    type: GET_ONEPOST,
    payload: slug
  };
};

export const getOnePostsuccess = slug => ({
  type: GET_ONEPOST_SUCCESS,
  payload: slug
});

export const getOnePostfailure = error => ({
  type: GET_ONEPOST_FAILURE,
  payload: error
});
