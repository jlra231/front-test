import { call, put, takeLatest } from 'redux-saga/effects';
import { ACTION_CART_PRODUCT_REQUEST_ADD, ACTION_CART_PRODUCT_ADD, ACTION_CART_PRODUCT_ERROR_PROCESSING } from '../actions/cart';

import ProductService from '../services/ProductService';

function* addProduct({ payload }) {
    try {
        const res = yield call(ProductService.addProductCart, payload);
        const data = yield res.json();
        yield put({type: ACTION_CART_PRODUCT_ADD, payload: data});
        
    } catch (error) {
        yield put({type: ACTION_CART_PRODUCT_ERROR_PROCESSING});
    }
}


export const cartSagas = [
    takeLatest(ACTION_CART_PRODUCT_REQUEST_ADD, addProduct)
];