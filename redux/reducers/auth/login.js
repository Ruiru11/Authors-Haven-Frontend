import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from "../../../constants/auth/login";

export const initialState = {
  loading: false
};

const LoginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, errors: "", loading: true };
    case LOGIN_SUCCESS:
      return { ...state, ...payload, loading: false };
    case LOGIN_FAILURE:
      return { ...state, ...payload, loading: false };

    default:
      return state;
  }
};
export default LoginReducer;
