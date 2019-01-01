import {
  LISTPOST,
  LISTPOST_SUCCESS,
  LISTPOST_FAILURE
} from "../../../constants/blog/posts";

export const initialState = {
  posts: [],
  loading: false
};

const PostListReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LISTPOST:
      return { ...state, errors: "", loading: true };
    case LISTPOST_SUCCESS:
      return { ...state, posts: action.payload.posts, loading: false };
    case LISTPOST_FAILURE:
      return { ...state, posts: [], loading: false };

    default:
      return state;
  }
};
export default PostListReducer;
