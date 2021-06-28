import { ACTION_PRODUCTS_DETAIL, ACTION_PRODUCTS_ERROR_LOADING, ACTION_PRODUCTS_ERROR_PROCESSING, ACTION_PRODUCTS_LOAD, ACTION_PRODUCTS_REQUEST_DETAIL, ACTION_PRODUCTS_REQUEST_LOAD, ACTION_PRODUCTS_SEARCH_VALUE } from "../actions/products";
import { UiState } from "../utils/UiState";

const initialState = {
    values: [],
    uiState: UiState.None,
    search: '',
    product: {}
}

const requestLoadProducts = (state) => ({ ...state, uiState: UiState.Loading });

const loadProducts = (state, payload) => ({ ...state, values: payload, uiState: UiState.Ready })

const searchValue = (state, payload) => ({ ...state, search: payload })

const requestProductDetail = (state) => ({ ...state, uiState: UiState.Loading })

const getProductDetail = (state, payload) => ({ ...state, product: payload, uiState: UiState.Ready})

const showErrorLoading = (state) => ({ ...state, uiState: UiState.ErrorLoading})

const showErrorProcessing = (state) => ({ ...state, uiState: UiState.ErrorProcessing})

// const products = (state = initialState, action) => ({
//     [ACTION_PRODUCTS_REQUEST_LOAD]: requestLoadProducts(state),
//     [ACTION_PRODUCTS_LOAD]: loadProducts(state, action.payload),
//     [ACTION_PRODUCTS_SEARCH_VALUE]: searchValue(state, action.payload),
//     [ACTION_PRODUCTS_REQUEST_DETAIL]: requestProductDetail(state),
//     [ACTION_PRODUCTS_DETAIL]: getProductDetail(state, action.payload),
//     [ACTION_PRODUCTS_ERROR_LOADING]: showErrorLoading(state),
//     [ACTION_PRODUCTS_ERROR_PROCESSING]: showErrorProcessing(state)
// })[action.type] || state

const products = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_PRODUCTS_REQUEST_LOAD: 
            return requestLoadProducts(state)
        case ACTION_PRODUCTS_LOAD: 
            return loadProducts(state, action.payload)
        case ACTION_PRODUCTS_SEARCH_VALUE: 
            return searchValue(state, action.payload);
        case ACTION_PRODUCTS_REQUEST_DETAIL: 
            return requestProductDetail(state, action.payload);
        case ACTION_PRODUCTS_DETAIL: 
            return getProductDetail(state, action.payload);
        case ACTION_PRODUCTS_ERROR_LOADING: 
            return showErrorLoading(state);
        case ACTION_PRODUCTS_ERROR_PROCESSING: 
            return showErrorProcessing(state);
        default:
            return state
    }
}

export default products;