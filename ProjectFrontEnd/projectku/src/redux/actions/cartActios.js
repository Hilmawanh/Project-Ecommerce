import { CART_SUCCESS, CART_FAILED, CART_LOADING } from './types'
import { APIURL } from '../../helper/apiurl'
import Axios from 'axios'

export const cartProduk = (UserIdRedux) => {
    return dispatch => {
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