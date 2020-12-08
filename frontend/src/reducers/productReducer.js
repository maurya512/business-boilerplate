// import constants
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILED } from '../constants/productConstants'
// reducer takes in two things
// initial state, action
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            // when making a request set the loading to true
            return { loading: true, products: [] }
        // if successful set loading to false and add the payload data to products array
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }
        // if failed set the loading to false and set an error
        case PRODUCT_LIST_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const productDetailsReducer = (state = { product: {reviews: [] } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true, ...state }
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case PRODUCT_DETAILS_FAILED:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

