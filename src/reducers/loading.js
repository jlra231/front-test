import { ACTION_LOADING_START, ACTION_LOADING_STOP } from "../actions/loading";
import createReducer from "./createReducer";

const initialState = {
    value: false
}

const startLoading = (state) => ({...state, value: true});

const stopLoading = (state) => ({...state, value: false});

const loading = createReducer(initialState, {
    [ACTION_LOADING_START]: startLoading,
    [ACTION_LOADING_STOP]: stopLoading
});

export default loading;