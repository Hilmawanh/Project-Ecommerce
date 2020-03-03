import axios from "axios";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_CHANGE_PASSWORD,
  AUTH_LOADING,
  AUTH_SYSTEM_ERROR,
  AUTH_LOGIN_ERROR,
  AUTH_REGISTER
} from "./types";
import { APIURL } from "./../../helper/apiurl";

export const userRegis = ({ username, email, password }) => {
  return dispatch => {
    dispatch({ type: AUTH_LOADING });
    if (username === "" || email === "" || password === "") {
      dispatch({
        type: AUTH_LOGIN_ERROR,
        payload: "Semua form diatas wajib diisi!"
      });
    } else {
      axios
        .post(APIURL + "auth/userRegister", {
          username,
          email,
          password
        })
        .then(res => {
          console.log(res);
          if (res.data.status === "error") {
            dispatch({ type: AUTH_SYSTEM_ERROR, payload: res.data.message });
          } else {
            localStorage.setItem("username", username);
            dispatch({ type: AUTH_REGISTER, payload: res.data });
          }
        })
        .catch(err => {
          console.log(err);
          dispatch({
            type: AUTH_SYSTEM_ERROR,
            payload: { error: "Error kaka" }
          });
        });
    }
  };
};

export const userLoginn = ({ email, password }) => {
  return dispatch => {
    console.log(email);

    dispatch({ type: AUTH_LOADING });
    if (email === "" || password === "") {
      dispatch({
        type: AUTH_LOGIN_ERROR,
        payload: "Email dan password tidak boleh kosong!"
      });
    } else {
      axios
        .get(APIURL + "auth/userLoginn", {
          params: {
            email,
            password
          }
        })
        .then(res => {
          if (res.data.status === "notmatch") {
            dispatch({ type: AUTH_LOGIN_ERROR, payload: res.data.error });
          } else if (res.data.status === "success") {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userid", res.data.id);
            dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
          }
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: AUTH_SYSTEM_ERROR, payload: "System Error" });
        });
    }
  };
};

export const userLoginRepeat = resdata => {
  return dispatch => {
    console.log("resdata");

    localStorage.setItem("token", resdata.token);
    localStorage.setItem("userid", resdata.id);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: resdata });
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  };
};

export const userChangePass = () => {
  return {
    type: USER_CHANGE_PASSWORD
  }
};
