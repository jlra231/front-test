
export const ACTION_CART_PRODUCT_REQUEST_ADD = 'cart/requestAddProductCart';
export const ACTION_CART_PRODUCT_ADD = 'cart/addProductCart';

export const ACTION_CART_PRODUCT_ERROR_PROCESSING = 'cart/errorProcessing';

export const requestAddProductCart = (payload) => ({type: ACTION_CART_PRODUCT_REQUEST_ADD, payload});
export const addProduct = (payload) => ({type: ACTION_CART_PRODUCT_ADD, payload});
export const errorProcessing = () => ({type: ACTION_CART_PRODUCT_ERROR_PROCESSING});