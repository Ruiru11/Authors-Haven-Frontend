import {
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS
} from "../../../constants/profile/profile";

export const initialState = {
  loading: false,
  profile: {}
};

const getProfileReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, errors: "", loading: true };
    case GET_PROFILE_SUCCESS:
      console.log("actionaction", action);
      return { ...state, profile: action.payload, loading: false };
    case GET_PROFILE_FAILURE:
      return { ...state, profile: [], loading: false };

    default:
      return state;
  }
};
export default getProfileReducer;
