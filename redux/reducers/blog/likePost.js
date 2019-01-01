import {
  LIKE_POST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE
} from "../../../constants/blog/likePost";

export const initialState = {
  loading: false
};

const likePostReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LIKE_POST:
      return { ...state, errors: "", loading: true };
    case LIKE_POST_SUCCESS:
      return { ...state, loading: false };
    case LIKE_POST_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
export default likePostReducer;
