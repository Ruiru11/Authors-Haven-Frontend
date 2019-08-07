import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { PROFILE } from "../../../constants/profile/profile";
import { profileSucess, profilefailure } from "../../actions/profile/profile";
import api from "../../../utils/request";

export function* ProfileAsync({ payload }) {
  try {
    const { navigate } = payload;
    const response = yield call(api.profile, payload);
    yield put(profileSucess());
    Toast.show(
      "Profile created successfully",
      Toast.SHORT,
      Toast.TOP,
      Successtyle
    );
    navigate("Profile");
  } catch (error) {
    Toast.show(
      "We could not create your profile",
      Toast.LONG,
      Toast.TOP,
      Errorstyle
    );
    yield put(profilefailure({ errors: error.message }));
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

export function* watchProfile() {
  yield takeEvery(PROFILE, ProfileAsync);
}
