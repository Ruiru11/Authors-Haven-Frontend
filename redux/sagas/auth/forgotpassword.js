import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { FORGOTPASSWORD } from "../../../constants/auth/forgotpassword";
import {
  forgotpassuccess,
  forgotpassfailure
} from "../../actions/auth/forgotpassword";
import api from "../../../utils/request";

export function* forgotPassAsync({ payload }) {
  try {
    const { navigate } = payload;
    const response = yield call(api.forgotPass, payload);
    yield put(forgotpassuccess());
    Toast.show(
      "An email was sent to your email address follow the instructions to reset your password",
      Toast.SHORT,
      Toast.TOP,
      Successtyle
    );
    navigate("Login");
  } catch (error) {
    Toast.show(
      "Email address doesnot exist,Kindly enter the email you used when creating your account",
      Toast.LONG,
      Toast.TOP,
      Errorstyle
    );
    yield put(forgotpassfailure({ errors: error.request.response.message }));
  }
}

const Errorstyle = {
  backgroundColor: "black",
  width: 500,
  height: Platform.OS === "ios" ? 50 : 300,
  color: "white",
  fontSize: 15,
  lineHeight: 2,
  lines: 4,
  borderRadius: 15,
  fontWeight: "bold",
  yOffset: 40
};

const Successtyle = {
  backgroundColor: "#0c9c0f",
  width: 500,
  height: Platform.OS === "ios" ? 50 : 300,
  color: "white",
  fontSize: 15,
  lineHeight: 2,
  lines: 4,
  borderRadius: 15,
  fontWeight: "bold",
  yOffset: 40
};

export function* watchForgotPass() {
  yield takeEvery(FORGOTPASSWORD, forgotPassAsync);
}
