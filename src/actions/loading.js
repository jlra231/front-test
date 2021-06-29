
export const ACTION_LOADING_START = 'loading/start';
export const ACTION_LOADING_STOP = 'loading/stop';

export const startLoading = () => ({type: ACTION_LOADING_START});
export const stopLoading = () => ({type: ACTION_LOADING_STOP});