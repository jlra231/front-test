
export const ACTION_PRODUCTS_REQUEST_LOAD = 'product/requestLoadProducts';
export const ACTION_PRODUCTS_LOAD = 'product/loadProducts';

export const ACTION_PRODUCTS_ERROR_LOADING = 'product/errorLoading';
export const ACTION_PRODUCTS_ERROR_PROCESSING = 'product/errorProcessing';

const requestLoadProducts = () => ({type: ACTION_PRODUCTS_REQUEST_LOAD, payload: 'Request load products'});
const loadProducts = () => ({type: ACTION_PRODUCTS_LOAD, payload: 'Load products'});
const errorLoading = () => ({type: ACTION_PRODUCTS_ERROR_LOADING, payload: 'Error loading products'});
const errorProcessing = () => ({type: ACTION_PRODUCTS_ERROR_PROCESSING, payload: 'Error processing products'});

export default { requestLoadProducts, loadProducts, errorLoading, errorProcessing };