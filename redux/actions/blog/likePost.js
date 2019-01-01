import {
  LIKE_POST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE
} from "../../../constants/blog/likePost";

export const likePost = slug => {
  return {
    type: LIKE_POST,
    payload: slug
  };
};

export const likePostsuccess = slug => ({
  type: LIKE_POST_SUCCESS,
  payload: slug
});

export const likePostfailure = error => ({
  type: LIKE_POST_FAILURE,
  payload: error
});
