import Toast from "react-native-toast-native";
import { Platform } from "react-native";
import { put, call, takeEvery } from "redux-saga/effects";
import { GET_USERS_POSTS } from "../../../constants/profile/posts";
import {
  getUserPostsSucess,
  getUserPostsfailure
} from "../../actions/profile/posts";
import api from "../../../utils/request";

export function* getUsersPostsAsync() {
  try {
    const response = yield call(api.getUserPosts);
    console.log("respnse user postsss", response.data);

    yield put(
      getUserPostsSucess({ type: "GET_USERS_POSTS_SUCCESS", ...response.data })
    );
  } catch (error) {
    console.log("errrrror", error);
    yield put(
      getUserPostsfailure({
        type: "GET_USERS_POSTS_FAILURE",
        errors: error.request.response.message
      })
    );
  }
}

export function* watchgetUsersPostsPass() {
  yield takeEvery(GET_USERS_POSTS, getUsersPostsAsync);
}
