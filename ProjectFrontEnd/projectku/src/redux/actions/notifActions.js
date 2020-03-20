import { NOTIFICATION } from './types'

export const notifCart = (dataUser) => {
    return {
        type: NOTIFICATION,
        payload: dataUser
    }
}