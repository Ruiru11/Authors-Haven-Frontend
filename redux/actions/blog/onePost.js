import {
  GETONEPOST,
  GETONEPOST_SUCCESS,
  GETONEPOST_FAILURE
} from "../../../constants/blog/onePost";

export const getOnePost = () => {
  return {
    type: GETONEPOST
  };
};

export const getOnePostsuccess = payload => ({
  type: GETONEPOST_SUCCESS,
  payload
});

export const getOnePostfailure = error => ({
  type: GETONEPOST_FAILURE,
  error
});
