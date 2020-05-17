import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_ERROR,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_ERROR,
} from "../actions/types";
const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_ERROR:
      console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };
    case LOGIN_SUCCESS:
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case SIGNOUT_SUCCESS:
      console.log("signout success");
      return state;

    case SIGNUP_SUCCESS:
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };
    case SIGNUP_ERROR:
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };
    case UPDATE_AVATAR_SUCCESS:
      console.log("update avatar success");

    case UPDATE_AVATAR_ERROR:
      console.log("update avatar error");

    case UPLOAD_AVATAR_SUCCESS:
      console.log("upload avatar success");

    case UPLOAD_AVATAR_ERROR:
      console.log("upload avatar error");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
