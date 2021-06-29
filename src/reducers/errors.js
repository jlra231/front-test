import { ACTION_ERRORS_MESSAGE } from "../actions/errors";
import createReducer from "./createReducer";

const initialState = {
    message: ''
}

const setMessage = (state, { payload }) => ({...state, message: payload});

const errors = createReducer(initialState, {
    [ACTION_ERRORS_MESSAGE]: setMessage
});

export default errors;