import {
    LIKE_POST,
    LIKE_POST_SUCCESS,
    LIKE_POST_FAILURE
  } from "../../../constants/blog/likePost";
  
  export const initialState = {
      post:[],
    loading: false
  };
  
  const likePostReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case LIKE_POST:
        return { ...state, errors: "", loading: true };
      case LIKE_POST_SUCCESS:
        console.log("Action from reducer from like >>>>", action);
        return { ...state, post: action.payload, loading: false };
      case LIKE_POST_FAILURE:
        return { ...state, post: [], loading: false };
  
      default:
        return state;
    }
  };
  export default likePostReducer;
  