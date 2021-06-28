import { call, put, takeLatest } from 'redux-saga/effects';
import { ACTION_PRODUCTS_DETAIL, ACTION_PRODUCTS_ERROR_LOADING, ACTION_PRODUCTS_LOAD, ACTION_PRODUCTS_REQUEST_DETAIL, ACTION_PRODUCTS_REQUEST_LOAD } from '../actions/products';

import ProductService from '../services/ProductService';

function* getProducts() {
    try {
        const res = yield call(ProductService.getAll);
        const data = yield res.json();
        yield put({type: ACTION_PRODUCTS_LOAD, payload: data});
        
    } catch (error) {
        yield put({type: ACTION_PRODUCTS_ERROR_LOADING});
    }
}

function* getProduct({ payload }) {
    try {
        const res = yield call(ProductService.getProduct, payload);
        const data = yield res.json();
        yield put({type: ACTION_PRODUCTS_DETAIL, payload: data});
        
    } catch (error) {
        yield put({type: ACTION_PRODUCTS_ERROR_LOADING});
    }
}

export const productSagas = [
    takeLatest(ACTION_PRODUCTS_REQUEST_LOAD, getProducts),
    takeLatest(ACTION_PRODUCTS_REQUEST_DETAIL, getProduct),
];