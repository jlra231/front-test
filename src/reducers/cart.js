import { ACTION_CART_PRODUCT_ADD } from "../actions/cart";
import createReducer from "./createReducer";

const initialState = {
    productsQuantity: 0,
}

const addProductCart = (state, { payload }) => ({...state, productsQuantity: payload.count});

const cart = createReducer(initialState, {
    [ACTION_CART_PRODUCT_ADD]: addProductCart
})

export default cart;