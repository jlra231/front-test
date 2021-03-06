

export const ACTION_PRODUCTS_REQUEST_LOAD = 'product/requestLoadProducts';
export const ACTION_PRODUCTS_LOAD = 'product/loadProducts';
export const ACTION_PRODUCTS_SEARCH_VALUE = 'product/searchProducts';
export const ACTION_PRODUCTS_REQUEST_DETAIL = 'product/requestProductDetail';
export const ACTION_PRODUCTS_DETAIL = 'product/productDetail';

export const requestLoadProducts = () => ({type: ACTION_PRODUCTS_REQUEST_LOAD});
export const loadProducts = (payload) => ({type: ACTION_PRODUCTS_LOAD, payload});
export const setSearchValue = (payload) => ({type: ACTION_PRODUCTS_SEARCH_VALUE, payload});
export const requestProductDetail = (payload) => ({type: ACTION_PRODUCTS_REQUEST_DETAIL, payload})
export const getProductDetail = (payload) => ({type: ACTION_PRODUCTS_DETAIL, payload})
