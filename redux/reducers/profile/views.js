import {
  GET_VIEWS,
  GET_VIEWS_SUCCESS,
  GET_VIEWS_FAILURE
} from "../../../constants/profile/views";

export const initialState = {
  loading: false,
  views: 0
};

const getPostViews = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_VIEWS:
      return { ...state, errors: "", loading: true };
    case GET_VIEWS_SUCCESS:
      return { ...state, views: action.payload, loading: false };
    case GET_VIEWS_FAILURE:
      return { ...state, views: 0, loading: false };

    default:
      return state;
  }
};

export default getPostViews;
