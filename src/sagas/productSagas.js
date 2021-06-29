import { call, put, takeLatest } from 'redux-saga/effects';
import { requestLoadProducts, loadProducts, getProductDetail, requestProductDetail } from '../actions/products';
import { startLoading, stopLoading } from '../actions/loading';
import ProductService from '../services/ProductService';
import { setErrorMessage } from '../actions/errors';

function* getProducts() {
     try {
         yield put(startLoading());
         const res = yield call(ProductService.getAll);
         const data = yield res.json();
         yield put(loadProducts(data));
         yield put(stopLoading());
        
     } catch (error) {
         yield put(stopLoading());
         yield put(setErrorMessage('Error loading products'));
     }
}

function* getProduct({ payload }) {
    try {
        yield put(startLoading());
        const res = yield call(ProductService.getProduct, payload);
        const data = yield res.json();
        yield put(getProductDetail(data));
        yield put(stopLoading());
        
    } catch (error) {
        yield put(stopLoading());
        yield put(setErrorMessage('Error getting the product'));
    }
}

export const productSagas = [
    takeLatest(requestLoadProducts().type, getProducts),
    takeLatest(requestProductDetail().type, getProduct),
];