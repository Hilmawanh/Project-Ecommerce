import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  AUTH_LOGIN_ERROR
} from "./../actions/types";

const INITIAL_STATE = {
  username: "",
  email: "",
  status: "",
  error: "",
  loginError: "",
  token: "",
  authchecked: false,
  loading: false,
  registerStatus: false,
  loginStatus: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
  }
};
