import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import loading from './loading';
import errors from './errors';

const rootReducer = combineReducers({
    products,
    cart,
    loading,
    errors
});

export default rootReducer;