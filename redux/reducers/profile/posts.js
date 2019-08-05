import {
  GET_USERS_POSTS,
  GET_USERS_POSTS_SUCCESS,
  GET_USERS_POSTS_FAILURE
} from "../../../constants/profile/posts";

export const initialState = {
  loading: false,
  posts: []
};

const getUsersPostsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS_POSTS:
      return { ...state, errors: "", loading: true };
    case GET_USERS_POSTS_SUCCESS:
      console.log("actionaction", action.payload);
      return { ...state, posts: action.payload, loading: false };
    case GET_USERS_POSTS_FAILURE:
      return { ...state, posts: [], loading: false };

    default:
      return state;
  }
};
export default getUsersPostsReducer;
