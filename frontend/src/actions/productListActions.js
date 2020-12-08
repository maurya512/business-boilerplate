// import constants
import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED } from '../constants/productConstants'
import { productListReducer } from '../reducers/productListReducer'

import axios from 'axios'

// functions that create actions
export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })
        const { data } = await axios.get('/api/products')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAILED,
            // check for generic error message and also custom error message
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}