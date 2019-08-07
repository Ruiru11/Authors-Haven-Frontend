import axios from "axios";
import { Platform } from "react-native";

import { authHeaders } from "./keys";

const baseUrl =
  Platform.OS === "ios" ? "http://127.0.0.1:4000" : "http://10.0.2.2:4000";

const entry = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkM2ViODIyY2ZhZjM2MmRlMWJlMmRiOCIsIlVzZXJuYW1lIjoicnVpcnUiLCJpYXQiOjE1NjQzOTI5MDcsImV4cCI6MTU5NTk0OTgzM30.MzThyFuZaP2RGnQknck7_U-iPKxqgIIJBVHEsR9qmZ0"
  }
});

const api = {
  loginUser: data => {
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
  likePost: payload => {
    return entry.post(`/api/like/post/${payload}`);
  },
  getPost: payload => {
    return entry.get(`/api/v1/posts/${payload}`);
  },
  getComment: payload => {
    return entry.get(`/api/comments/all/${payload}`);
  },
  postComment: payload => {
    const { content, id } = payload;
    const payloadToBackend = {
      content
    };
    return entry.post(`/api/posts/comments/${id}`, payloadToBackend);
  },
  profile: data => {
    const { firstName, lastName, bio, interest } = data;
    const payloadToBackend = {
      firstName,
      lastName,
      bio,
      interest
    };
    return entry.post("/api/user/profile/create", payloadToBackend);
  },
  getProfile: () => {
    return entry.get("/api/user/profile/view");
  },
  getUserPosts: () => {
    return entry.get("/api/v1/posts/users/Articles");
  },
  getPostsViews: payload => {
    return entry.post(`/api/v1/posts/view/${payload}`);
  }
};
export default api;
