import {
  LISTPOST,
  LISTPOST_SUCCESS,
  LISTPOST_FAILURE
} from "../../../constants/blog/posts";

export const ListPost = () => {
  return {
    type: LISTPOST
  };
};

export const Listpostsuccess = (payload) => ({
  type: LISTPOST_SUCCESS,
  payload
});

export const Listpostfailure = error => ({
  type: LISTPOST_FAILURE,
  error
});
