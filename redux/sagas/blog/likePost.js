import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { LIKE_POST } from "../../../constants/blog/likePost";
import { likePostsuccess, likePostfailure } from "../../actions/blog/likePost";
import api from "../../../utils/request";

export function* likePostAsync() {
  try {
    const response = yield call(api.onePost());
    console.log("respnse????", response);
    yield put(getOnePostsuccess({ type: "GETONEPOST_SUCCESS" }));
  } catch (error) {
    console.log("error????", error);

    yield put(
      getOnePostfailure({
        type: "GETONEPOST_FAILURE",
        errors: error.request.response.message
      })
    );
  }
}

export function* watchlikePostPass() {
  yield takeEvery(LIKE_POST, likePostAsync);
}
