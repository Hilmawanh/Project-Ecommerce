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
import { cartProduk } from "./cartActios";


export const userRegis = ({ username, email, password }) => {
  return dispatch => {
    dispatch({ type: AUTH_LOADING });
    if (username === "" || email === "" || password === "") {
      dispatch({
        type: AUTH_LOGIN_ERROR,
        payload: "Semua form diatas wajib diisi!"
      });

    }
    else {
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

export const userLoginn = ({ username, password }) => {
  return dispatch => {
    console.log(username);

    dispatch({ type: AUTH_LOADING });
    if (username === "" || password === "") {
      dispatch({
        type: AUTH_LOGIN_ERROR,
        payload: "username dan password tidak boleh kosong!"
      });
    } else {
      axios
        .get(APIURL + "auth/userLoginn", {
          params: {
            username,
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
    var id = localStorage.getItem("userid");
    if (id) {
      axios
        .get(`${APIURL}auth/userLoginn/${id}`)
        .then(res => {
          // this.props.userLoginRepeat(res.data);
          // this.props.cartProduk()
          dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
          // dispatch(cartProduk())
        })
        .catch(err => {
          console.log(err);
        });
    }
    // this.props.notifCart()
    // this.setState({ loading: false });
    // { this.props.loading }
  }
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
