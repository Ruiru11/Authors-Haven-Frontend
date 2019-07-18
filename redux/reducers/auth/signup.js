import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
} from "../../../constants/auth/signup";

export const initialState = {
  loading: false
};

const signupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP:
      return { ...state, errors: "", loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, ...payload, loading: false };
    case SIGNUP_FAILURE:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
export default signupReducer;
