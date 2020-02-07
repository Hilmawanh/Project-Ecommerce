import axios from "axios";
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
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

export const loginUser = ({ email, password }) => {
  return dispatch => {
    dispatch({ type: AUTH_LOADING });
    if (email === "" || password === "") {
      dispatch({
        type: AUTH_LOGIN_ERROR,
        payload: "Email dan Password tidak boleh kosong"
      });
    } else {
      axios
        .post(APIURL + "auth/loginUser", { email, password })
        .then(res => {
          // console.log(res);
          if (res.data.status === "error") {
            dispatch({ type: AUTH_SYSTEM_ERROR, payload: res.data.message });
          } else {
            localStorage.setItem("email", email);
            dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
          }
        })
        .catch(err => {
          dispatch({
            type: AUTH_SYSTEM_ERROR,
            payload: { error: "System error" }
          });
        });
    }
  };
};

export const logutUser = ({}) => {};
