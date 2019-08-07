import { all, fork } from "redux-saga/effects";

import { watchLogin } from "./auth/login";
import { watchSignup } from "./auth/signup";
import { watchForgotPass } from "./auth/forgotpassword";
import { watchListPostPass } from "./blog/posts";
import { watchlikePostPass } from "./blog/likePost";
import { watchGetOnePostPass } from "./blog/onePost";
import { watchCommentFetchPass } from "./blog/comments";
import { watchPostCommentPass } from "./blog/postComment";
import { watchProfile } from "./profile/profile";
import { watchgetProflePass } from "./profile/getProfile";
import { watchgetUsersPostsPass } from "./profile/posts";
import { watchGetViews } from "./profile/views";

export default function* root() {
  yield all([
    fork(watchLogin),
    fork(watchSignup),
    fork(watchForgotPass),
    fork(watchListPostPass),
    fork(watchlikePostPass),
    fork(watchGetOnePostPass),
    fork(watchCommentFetchPass),
    fork(watchPostCommentPass),
    fork(watchProfile),
    fork(watchgetProflePass),
    fork(watchgetUsersPostsPass),
    fork(watchGetViews)
  ]);
}
 