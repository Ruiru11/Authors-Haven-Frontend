import { put, call, takeEvery } from "redux-saga/effects";
import { GET_VIEWS } from "../../../constants/profile/views";
import { getViewSuccess, getViewsFailure } from "../../actions/profile/views";
import api from "../../../utils/request";

export function* getViewsAsync({ payload }) {
  try {
    const response = yield call(api.getPostsViews, payload);
    yield put(
      getViewSuccess({ type: "GET_VIEWS_SUCCESS", ...response.data.response })
    );
  } catch (error) {
    yield put(
      getViewsFailure({
        type: "GET_VIEWS_FAILURE",
        error: error.request.response.message
      })
    );
  }
}

export function* watchGetViews() {
  yield takeEvery(GET_VIEWS, getViewsAsync);
}
