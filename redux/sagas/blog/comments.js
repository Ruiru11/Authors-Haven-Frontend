import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { GET_COMMENT } from "../../../constants/blog/comments";
import {
  getCommentsuccess,
  getCommentfailure
} from "../../actions/blog/comments";
import api from "../../../utils/request";

export function* getCommentAsync({ payload }) {
  try {
    const response = yield call(api.getComment, payload);
    const comments = response.data;
    yield put(getCommentsuccess({ type: "GET_COMMENT_SUCCESS", comments }));
  } catch (error) {
    yield put(
      getCommentfailure({
        type: "GET_COMMENT_FAILURE",
        errors: error.request.response.message
      })
    );
  }
}

export function* watchCommentFetchPass() {
  yield takeEvery(GET_COMMENT, getCommentAsync);
}
