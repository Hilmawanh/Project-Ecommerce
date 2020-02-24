import {
  AUTH_LOADING,
  AUTH_SYSTEM_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  AUTH_LOGIN_ERROR,
  AUTH_REGISTER
} from "./../actions/types";

const INITIAL_STATE = {
  userid: 0,
  roleid: 0,
  username: "",
  email: "",
  status: "",
  error: "",
  loginError: "",
  authchecked: false,
  loading: false,
  registerStatus: false,
  loginStatus: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_REGISTER:
      return {
        ...INITIAL_STATE,
        ...action.payload,
        authchecked: true,
        registerStatus: true
      };

    case AUTH_SYSTEM_ERROR:
      return {
        ...INITIAL_STATE,
        ...action.payload,
        authchecked: true
      };

    case AUTH_LOADING:
      return { ...state, error: "", loading: true };

    case USER_LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE,
        ...action.payload,
        authchecked: true,
        loginStatus: true
      };

    case AUTH_LOGIN_ERROR:
      return {
        ...INITIAL_STATE,
        loginError: action.payload
      };

    case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }
};
