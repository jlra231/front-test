import { call, put, takeLatest } from 'redux-saga/effects';

import { addProduct, requestAddProductCart } from '../actions/cart';
import { setErrorMessage } from '../actions/errors';
import { startLoading, stopLoading } from '../actions/loading';
import ProductService from '../services/ProductService';

function* addProd({ payload }) {
    try {
        yield put(startLoading());
        const res = yield call(ProductService.addProductCart, payload);
        const data = yield res.json();
        yield put(addProduct(data));
        yield put(stopLoading());
        
    } catch (error) {
        yield put(stopLoading());
        yield put(setErrorMessage('Error processing the request'));
    }
}


export const cartSagas = [
    takeLatest(requestAddProductCart().type, addProd)
];