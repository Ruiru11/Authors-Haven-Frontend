import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { LISTPOST } from "../../../constants/blog/posts";
import { Listpostsuccess, Listpostfailure } from "../../actions/blog/posts";
import api from "../../../utils/request";

export function* listPostsAsync() {
  try {
    const response = yield call(api.listPosts);
    console.log("respnse????", response);
    const posts = response.data;
    yield put(Listpostsuccess({ type: "LISTPOST_SUCCESS", posts }));
  } catch (error) {
    console.log("error????", error);

    yield put(
      Listpostfailure({
        type: "LISTPOST_FAILURE",
        errors: error.request.response.message
      })
    );
  }
}

export function* watchListPostPass() {
  yield takeEvery(LISTPOST, listPostsAsync);
}
