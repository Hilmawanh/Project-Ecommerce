import { CART_SUCCESS, CART_FAILED, CART_LOADING, DELETE_CART_SUCCESS, DELETE_CART_LOADING, DELETE_CART_FAILED, NOTIFICATION } from './types'
import { APIURL } from '../../helper/apiurl'
import Axios from 'axios'
import { useSelector, useDispatch } from "react-redux";


export const cartProduk = () => {
    return dispatch => {
        const UserIdRedux = localStorage.getItem('userid')
        dispatch({ type: CART_LOADING })
        Axios.get(`${APIURL}auth/getCart/${UserIdRedux}`)
            .then(res => {
                var dataTotalHarga = 0
                res.data.getCart.forEach(val => {
                    dataTotalHarga += val.total
                    dispatch({ type: CART_SUCCESS, payload: { getCart: res.data.getCart, dataTotalHarga, totalCart: res.data.getCart.length } })
                })
                // dispatch({ type: CART_SUCCESS, payload: { getCart: res.data.getCart, dataTotalHarga,totalCart: res.data.getCart.length }})
                dispatch({ type: CART_LOADING })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: CART_FAILED })
            })
    }
}


export const AddCartProduk = (getTocart) => {
    return dispatch => {
        dispatch({ type: CART_LOADING })
        Axios.post(`${APIURL}auth/postTransaction`, { getTocart })
            .then(res => {
                dispatch(cartProduk())
            })
            .catch(err => {
                console.log('error post', err)
            })
    }
}


export const deleteCart = (idDelete, UserIdRedux) => {
    console.log(idDelete, 'idDelete')
    return dispatch => {
        dispatch({ type: DELETE_CART_LOADING })
        Axios.delete(`${APIURL}auth/deleteCart/${idDelete}/${UserIdRedux}`)
            .then(res => {
                dispatch(cartProduk())
                // dispatch({ type: CART_SUCCESS, payload: res.data.dataCartDelete })
            })
            .catch(err => {
                dispatch({ type: DELETE_CART_FAILED })
            })
    }
}