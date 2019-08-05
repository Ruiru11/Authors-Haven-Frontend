import {
  GET_USERS_POSTS,
  GET_USERS_POSTS_FAILURE,
  GET_USERS_POSTS_SUCCESS
} from "../../../constants/profile/posts";

export const getUserPosts = payload => {
  return {
    type: GET_USERS_POSTS,
    payload
  };
};

export const getUserPostsSucess = payload => ({
  type: GET_USERS_POSTS_SUCCESS,
  payload
});

export const getUserPostsfailure = error => ({
  type: GET_USERS_POSTS_FAILURE,
  error
});
