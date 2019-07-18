import {
  FORGOTPASSWORD,
  FORGOTPASSWORD_SUCCESS,
  FORGOTPASSWORD_FAILURE
} from "../../../constants/auth/forgotpassword";

export const initialState = {
  loading: false
};

const ForgotPassReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FORGOTPASSWORD:
      return { ...state, errors: "", loading: true };
    case FORGOTPASSWORD_SUCCESS:
      return { ...state, ...payload, loading: false };
    case FORGOTPASSWORD_FAILURE:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
export default ForgotPassReducer;
