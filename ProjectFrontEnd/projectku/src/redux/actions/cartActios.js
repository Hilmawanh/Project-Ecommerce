import { CART_SUCCESS, CART_FAILED, CART_LOADING, DELETE_CART_SUCCESS, DELETE_CART_LOADING, DELETE_CART_FAILED } from './types'
import { APIURL } from '../../helper/apiurl'
import Axios from 'axios'

export const cartProduk = () => {
    return dispatch => {
        const UserIdRedux = localStorage.getItem('userid')
        dispatch({ type: CART_LOADING })
        Axios.get(`${APIURL}auth/getCart/${UserIdRedux}`)
            .then(res => {
                dispatch({ type: CART_SUCCESS, payload: res.data.getCart })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: CART_FAILED })
            })
    }
}

export const deleteCart = (idDelete, UserIdRedux) => {
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
