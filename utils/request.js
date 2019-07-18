import axios from "axios";
import { Platform } from "react-native";

import { authHeaders } from "./keys";

const baseUrl =
  Platform.OS === "ios" ? "http://127.0.0.1:4000" : "http://10.0.2.2:4000";

const entry = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    ...authHeaders()
  }
});

const api = {
  loginUser: data => {
    console.log(data, "data imetumwa");
    return entry.post("/api/users/login", data);
  },
  signupUser: data => {
    return entry.post("/api/users/register", data);
  },
  forgotPass: data => {
    return entry.post("/api/users/forgot-password", data);
  },
  listPosts: () => {
    return entry.get("/api/v1/posts");
  },
  onePost: (slug) => {
    return entry.get(`/api/v1/posts/${slug}`);
  }
};
export default api;
