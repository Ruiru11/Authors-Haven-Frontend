import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { POST_COMMENT } from "../../../constants/blog/comments";
import {
  postCommentSuccess,
  postCommentFailure
} from "../../actions/blog/comments";
import api from "../../../utils/request";

export function* postCommentAsync({ payload }) {
  try {
    const response = yield call(api.postComment, payload);
    yield put(
      postCommentSuccess({ type: "POST_COMMENT_SUCCESS", ...response.data })
    );
  } catch (error) {
    yield put(
      postCommentFailure({
        type: "POST_COMMENT_FAILURE",
        errors: error.request.response.message
      })
    );
  }
}

export function* watchPostCommentPass() {
  yield takeEvery(POST_COMMENT, postCommentAsync);
}
