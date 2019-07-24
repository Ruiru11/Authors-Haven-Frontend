import {
  LIKE_POST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE
} from "../../../constants/blog/likePost";

export const likePost = () => {
  return {
    type: LIKE_POST
  };
};

export const likePostsuccess = payload => ({
  type: LIKE_POST_SUCCESS,
  payload
});

export const likePostfailure = error => ({
  type: LIKE_POST_FAILURE,
  error
});
