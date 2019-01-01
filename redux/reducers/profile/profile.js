import {
  PROFILE,
  PROFILE_FAILURE,
  PROFILE_SUCCESS
} from "../../../constants/profile/profile";

export const initialState = {
  loading: false
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE:
      return { ...state, errors: "", loading: true };
    case PROFILE_SUCCESS:
      return { ...state, ...payload, loading: false };
    case PROFILE_FAILURE:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
export default profileReducer;
