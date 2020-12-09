// when we add a product to the cart we want to make a api request to the products
import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstant'

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        // everything that we want to display on the cart screen
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })

    // to save the items inside of the cart in local storage so that the items inside of the cart persist upon refresh
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
