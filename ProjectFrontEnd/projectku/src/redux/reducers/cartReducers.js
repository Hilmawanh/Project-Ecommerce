import { CART_SUCCESS, CART_FAILED, CART_LOADING } from './../actions/types'

const INITAL_STATE = {
    Cart: [],
    loading: false,
    message: ""
}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case CART_SUCCESS:
            return { ...state, Cart: action.payload }
        case CART_LOADING:
            return { ...state, loading: true }
        case CART_FAILED:
            return { ...state, message: "Get failed kaka" }
        default:
            return state
    }
}

