import {
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILURE,
  POST_COMMENT,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE
} from "../../../constants/blog/comments";

export const getComment = id => {
  return {
    type: GET_COMMENT,
    payload: id
  };
};

export const getCommentsuccess = id => ({
  type: GET_COMMENT_SUCCESS,
  payload: id
});

export const getCommentfailure = error => ({
  type: GET_COMMENT_FAILURE,
  payload: error
});

export const postComment = payload => {
  return {
    type: POST_COMMENT,
    payload
  };
};

export const postCommentSuccess = payload => ({
  type: POST_COMMENT_SUCCESS,
  payload
});

export const postCommentFailure = error => ({
  type: POST_COMMENT_FAILURE,
  error
});
