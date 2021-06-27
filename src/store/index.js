import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import { productSagas } from "../sagas/productSagas";
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

function* rootSaga() {
    yield all([
        ...productSagas
    ])
}

sagaMiddleware.run(rootSaga);

export default store;

