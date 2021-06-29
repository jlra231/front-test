import { ACTION_PRODUCTS_DETAIL, ACTION_PRODUCTS_LOAD, ACTION_PRODUCTS_SEARCH_VALUE } from "../actions/products";
import createReducer from "./createReducer";

const initialState = {
    values: [],
    search: '',
    product: {}
}

const loadProducts = (state, { payload }) => ({ ...state, values: payload })

const searchValue = (state, { payload }) => ({ ...state, search: payload })

const getProductDetail = (state, { payload }) => ({ ...state, product: payload})

const products = createReducer(initialState, {
    [ACTION_PRODUCTS_LOAD]: loadProducts,
    [ACTION_PRODUCTS_SEARCH_VALUE]: searchValue,
    [ACTION_PRODUCTS_DETAIL]: getProductDetail
})

export default products;