
export const ACTION_PRODUCTS_REQUEST_LOAD = 'product/requestLoadProducts';
export const ACTION_PRODUCTS_LOAD = 'product/loadProducts';
export const ACTION_PRODUCTS_SEARCH_VALUE = 'product/searchProducts';

export const ACTION_PRODUCTS_ERROR_LOADING = 'product/errorLoading';
export const ACTION_PRODUCTS_ERROR_PROCESSING = 'product/errorProcessing';

export const requestLoadProducts = () => ({type: ACTION_PRODUCTS_REQUEST_LOAD});
export const loadProducts = (payload) => ({type: ACTION_PRODUCTS_LOAD, payload});
export const setSearchValue = (payload) => ({type: ACTION_PRODUCTS_SEARCH_VALUE, payload});

export const errorLoading = () => ({type: ACTION_PRODUCTS_ERROR_LOADING});
export const errorProcessing = () => ({type: ACTION_PRODUCTS_ERROR_PROCESSING});
