import {
  GETONEPOST,
  GETONEPOST_SUCCESS,
  GETONEPOST_FAILURE
} from "../../../constants/blog/onePost";

export const initialState = {
  post: [],
  loading: false
};

const onePostReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GETONEPOST:
      return { ...state, errors: "", loading: true };
    case GETONEPOST_SUCCESS:
      console.log("Action from reducer>>>>", action);
      return { ...state, post: action.payload.post, loading: false };
    case GETONEPOST_FAILURE:
      return { ...state, post: [], loading: false };

    default:
      return state;
  }
};
export default onePostReducer;
