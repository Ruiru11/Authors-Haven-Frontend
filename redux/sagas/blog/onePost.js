import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { GETONEPOST } from "../../../constants/blog/onePost";
import {
  getOnePostsuccess,
  getOnePostfailure
} from "../../actions/blog/onePost";
import api from "../../../utils/request";

export function* getOnePostAsync() {
  try {
    const response = yield call(api.onePost());
    console.log("respnse????", response);
    const post = response.data;
    yield put(getOnePostsuccess({ type: "GETONEPOST_SUCCESS", post }));
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

export function* watchGetOnePostPass() {
  yield takeEvery(GETONEPOST, getOnePostAsync);
}
