import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import { cartSagas } from "../sagas/cartSagas";
import { productSagas } from "../sagas/productSagas";
import { all } from 'redux-saga/effects';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import expireIn from "redux-persist-transform-expire-in";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const timeExpireIn = 1 * 60 * 60 * 1000;

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    blacklist: ['errors', 'loading'],
    transforms: [expireIn(timeExpireIn, 'expirationTime', [])]
    
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

const persistor = persistStore(store);

function* rootSaga() {
    yield all([
        ...productSagas,
        ...cartSagas
    ])
}

sagaMiddleware.run(rootSaga);

export { store, persistor };



