import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { LIKE_POST } from "../../../constants/blog/likePost";
import { likePostsuccess, likePostfailure } from "../../actions/blog/likePost";
import api from "../../../utils/request";

export function* likePostAsync({ payload }) {
  try {
    const response = yield call(api.likePost, payload);
    yield put(likePostsuccess({ type: "LIKE_POST_SUCCESS", ...response.data }));
  } catch (error) {

    yield put(
      likePostfailure({
        type: "LIKE_POST_FAILURE",
        errors: error.request.response.message
      })
    );
  }
}

export function* watchlikePostPass() {
  yield takeEvery(LIKE_POST, likePostAsync);
}
