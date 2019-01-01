import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { GET_ONEPOST } from "../../../constants/blog/onePost";
import {
  getOnePostsuccess,
  getOnePostfailure
} from "../../actions/blog/onePost";
import api from "../../../utils/request";

export function* getOnePostAsync({ payload }) {
  try {
    const response = yield call(api.getPost, payload);
    const post = response.data;
    yield put(getOnePostsuccess({ type: "GET_ONEPOST_SUCCESS", post }));
  } catch (error) {
    yield put(
      getOnePostfailure({
        type: "GET_ONEPOST_FAILURE",
        errors: error.request.response.message
      })
    );
  }
}

export function* watchGetOnePostPass() {
  yield takeEvery(GET_ONEPOST, getOnePostAsync);
}
