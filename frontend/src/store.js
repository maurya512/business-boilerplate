import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducer, productDetailsReducer } from './reducers/productReducer'
import { cartReducer } from './reducers/cartReducers.js'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
// import { load } from 'dotenv/types'
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    cart: cartReducer,
    userRegister: userRegisterReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

// checks to see if user info is in storge
// if found store inside a variable and if not then set to null
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

// cart items, local storage
const initialState = {
    // setting cartitems to cartItemsFromStorage
    cart: { cartItems: cartItemsFromStorage },
    // setting user's login info to userInfoFromStorage
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store
