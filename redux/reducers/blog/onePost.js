import {
  GET_ONEPOST,
  GET_ONEPOST_SUCCESS,
  GET_ONEPOST_FAILURE
} from "../../../constants/blog/onePost";

import {
  POST_COMMENT,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE
} from "../../../constants/blog/comments";

import {
  LIKE_POST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE
} from "../../../constants/blog/likePost";

export const initialState = {
  post: [],
  loading: false
};

const onePostReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_ONEPOST:
      return { ...state, errors: "", loading: true };
    case GET_ONEPOST_SUCCESS:
      return { ...state, post: action.payload.post, loading: false };
    case GET_ONEPOST_FAILURE:
      return { ...state, post: [], loading: false };
    case LIKE_POST:
      return { ...state, errors: "", loading: true };
    case LIKE_POST_SUCCESS:
      return { ...state, post: action.payload.post, loading: false };
    case LIKE_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        post: action.payload.commentData,
        loading: false
      };

    default:
      return state;
  }
};
export default onePostReducer;
