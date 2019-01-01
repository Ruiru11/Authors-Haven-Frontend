import {
  GET_COMMENT,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_FAILURE,
  POST_COMMENT,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE
} from "../../../constants/blog/comments";

export const initialState = {
  comments: [],
  loading: false
};

const getCommentReducer = (state = initialState, action, data = {}) => {
  switch (action.type) {
    case GET_COMMENT:
      return { ...state, errors: "", loading: true };
    case GET_COMMENT_SUCCESS:
      return { ...state, comments: action.payload.comments, loading: false };
    case GET_COMMENT_FAILURE:
      return { ...state, comments: [], loading: false, error: action.payload };
    case POST_COMMENT:
      return { ...state, loading: true };
    case POST_COMMENT_SUCCESS:
      return {
        ...state,
        comments: action.payload.commentData.comment,
        loading: false
      };
    case POST_COMMENT_FAILURE:
      return { ...state, ...data, loading: false };
    default:
      return state;
  }
};
export default getCommentReducer;
