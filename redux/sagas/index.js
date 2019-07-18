import { all, fork } from "redux-saga/effects";

import { watchLogin } from "./auth/login";
import { watchSignup } from "./auth/signup";
import { watchForgotPass } from "./auth/forgotpassword";
import { watchListPostPass } from "./blog/posts";

export default function* root() {
  console.log("root saga is called");
  yield all([
    fork(watchLogin),
    fork(watchSignup),
    fork(watchForgotPass),
    fork(watchListPostPass)
  ]);
}
