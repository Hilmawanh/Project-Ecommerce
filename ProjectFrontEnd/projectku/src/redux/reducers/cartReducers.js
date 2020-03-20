import { CART_SUCCESS, CART_FAILED, CART_LOADING, NOTIFICATION } from './../actions/types'

const INITAL_STATE = {
    Cart: [],
    loading: true,
    message: "",
    dataTotalHarga: 0,
    // notif: 0
}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case CART_SUCCESS:
            return { ...state, Cart: action.payload.getCart, dataTotalHarga: action.payload.dataTotalHarga, message: "Cart Berhasil di tambahkan" }
        case CART_LOADING:
            return { ...state, loading: false }
        case CART_FAILED:
            return { ...state, message: "Get failed kaka" }
        case NOTIFICATION:
            return action.payload
        default:
            return state
    }
}

