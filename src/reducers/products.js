import { ACTION_PRODUCTS_ERROR_LOADING, ACTION_PRODUCTS_ERROR_PROCESSING, ACTION_PRODUCTS_LOAD, ACTION_PRODUCTS_REQUEST_LOAD } from "../actions/products";
import { UiState } from "../utils/UiState";

const initialState = {

    values: [],
    uiState: UiState.None

    
}

const requestLoadProducts = (state) => ({ ...state, uiState: UiState.Loading });

const loadProducts = (state, payload) => ({ ...state, values: payload, uiState: UiState.Ready })

const showErrorLoading = (state) => ({ ...state, uiState: UiState.ErrorLoading})

const showErrorProcessing = (state) => ({ ...state, uiState: UiState.ErrorProcessing})

const products = (state = initialState, action) => ({
    [ACTION_PRODUCTS_REQUEST_LOAD]: requestLoadProducts(state),
    [ACTION_PRODUCTS_LOAD]: loadProducts(state, action.payload),
    [ACTION_PRODUCTS_ERROR_LOADING]: showErrorLoading(state),
    [ACTION_PRODUCTS_ERROR_PROCESSING]: showErrorProcessing(state)
})[action.type] || state

export default products;