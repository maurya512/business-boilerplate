import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstant'

// contains a state and an array since will have more than 1 item in the cart
export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {

        case CART_ADD_ITEM:
            const item = action.payload

            // checks if the item already exists in the cart by matching the id of the product in the cart and the product being added to the cart
            const existItem = state.cartItems.find(x => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item: x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        // default case will return the state as it is
        default:
            return state
    }
}