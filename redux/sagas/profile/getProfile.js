import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { GET_PROFILE } from "../../../constants/profile/profile";
import {
  getProfileSuccess,
  getProfileFailure
} from "../../actions/profile/profile";
import api from "../../../utils/request";

export function* getProfileAsync() {
  try {
    const response = yield call(api.getProfile);

    yield put(
      getProfileSuccess({ type: "GET_PROFILE_SUCCESS", ...response.data })
    );
  } catch (error) {
    console.log("errrrror", error);
    yield put(
      getProfileFailure({
        type: "GET_PROFILE_FAILURE",
        errors: error.request.response.message
      })
    );
  }
}

export function* watchgetProflePass() {
  yield takeEvery(GET_PROFILE, getProfileAsync);
}
