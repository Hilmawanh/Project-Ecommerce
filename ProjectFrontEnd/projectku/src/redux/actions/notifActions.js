import { NOTIFICATION } from './types'

import Axios from 'axios'
import { APIURL } from './../../helper/apiurl'

export const notifCart = () => {
    return dispatch => {
        const UserIdRedux = localStorage.getItem('userid')
        Axios.get(`${APIURL}auth/getCart/ ${UserIdRedux}`)
            .then(res => {
                console.log(res.data.getCart.length, 'asd')
                dispatch({ type: 'NOTIFICATION', payload: res.data.getCart.length })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

