import { ACTION_CART_PRODUCT_ADD, ACTION_CART_PRODUCT_REQUEST_ADD } from "../actions/cart";
import { UiState } from "../utils/UiState";

const initialState = {
    productsQuantity: 0,
    uiState: UiState.None
}

const requestAddProductCart = (state) => ({...state, uiState: UiState.Processing});

const addProductCart = (state, payload) => ({...state, productsQuantity: payload.count, uiState: UiState.Ready});

// const cart = (state = initialState, action) => ({
//     [ACTION_CART_PRODUCT_REQUEST_ADD]: requestAddProductCart(state),
//     [ACTION_CART_PRODUCT_ADD]: addProductCart(state, action.payload)

// })[action.type] || state

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CART_PRODUCT_REQUEST_ADD: 
            return requestAddProductCart(state)
        case ACTION_CART_PRODUCT_ADD: 
            return addProductCart(state, action.payload)
        default:
            return state
    }
}

export default cart;