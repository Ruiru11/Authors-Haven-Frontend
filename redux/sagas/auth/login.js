import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { LOGIN } from "../../../constants/auth/login";
import { loginsuccess, loginfailure } from "../../actions/auth/login";
import api from "../../../utils/request";
import { setToken } from "../../../utils/keys";

export function* loginAsync({ payload }) {
  try {
    const { navigate } = payload;
    const response = yield call(api.loginUser, payload);
    setToken(response.data.token);
    yield put(loginsuccess());
    Toast.show("Login successful welcome", Toast.SHORT, Toast.TOP, Successtyle);
    navigate("Dashboard");
  } catch (error) {
    Toast.show(
      "Your Email or Password is incorrect.Kindly try again",
      Toast.LONG,
      Toast.TOP,
      Errorstyle
    );
    yield put(loginfailure({ errors: error.request.response.message }));
  }
}

const Errorstyle = {
  backgroundColor: "black",
  width: 500,
  height: Platform.OS === "ios" ? 50 : 250,
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
  height: Platform.OS === "ios" ? 50 : 200,
  color: "white",
  fontSize: 15,
  lineHeight: 2,
  lines: 4,
  borderRadius: 15,
  fontWeight: "bold",
  yOffset: 40
};

export function* watchLogin() {
  yield takeEvery(LOGIN, loginAsync);
}
