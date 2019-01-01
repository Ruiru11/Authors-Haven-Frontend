import { combineReducers } from "redux";
import login from "./auth/login";
import signup from "./auth/signup";
import forgotpass from "./auth/forgotpassword";
import listPosts from "./blog/posts";
import onePost from "./blog/onePost";
import getComment from "./blog/comments";
import profile from "./profile/profile";
import getProfile from "./profile/getProfile";

export default combineReducers({
  login,
  signup,
  forgotpass,
  listPosts,
  onePost,
  getComment,
  profile,
  getProfile
});
