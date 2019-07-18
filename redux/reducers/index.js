import { combineReducers } from "redux";
import login from "./auth/login";
import signup from "./auth/signup";
import forgotpass from "./auth/forgotpassword";
import listPosts from "./blog/posts";
import onePost from "./blog/onePost";

export default combineReducers({
  login,
  signup,
  forgotpass,
  listPosts,
  onePost
});
