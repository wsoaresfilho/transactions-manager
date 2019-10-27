import * as API from '../api/api';

// This variable is simulating a logged user
const USER = 'jose';

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const SAVE_THEME = 'SAVE_THEME';
export const GET_SETTINGS = 'GET_SETTINGS';
export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_DONE = 'FETCH_DONE';

export const setFetchPending = () => {
    return {
        type: FETCH_PENDING,
    };
};

export const setFetchDone = () => {
    return {
        type: FETCH_DONE,
    };
};

export const getTransactions = transactions => {
    return {
        type: GET_TRANSACTIONS,
        transactions,
    };
};

export const fetchTransactionsData = () => {
    return dispatch => {
        dispatch(setFetchPending());
        return API.getAllTransactions(USER).then(response => {
            dispatch(getTransactions(response));
            dispatch(setFetchDone());
        });
    };
};

export const addTransaction = transaction => {
    return dispatch => {
        dispatch(setFetchPending());
        return API.saveTransaction(USER, transaction).then(response => {
            dispatch(getTransactions(response));
            dispatch(setFetchDone());
        });
    };
};

export const deleteTransaction = transactionId => {
    return dispatch => {
        dispatch(setFetchPending());
        return API.deleteTransaction(USER, transactionId).then(response => {
            dispatch(getTransactions(response));
            dispatch(setFetchDone());
        });
    };
};

export const saveThemeToStore = theme => {
    return {
        type: SAVE_THEME,
        theme,
    };
};

export const saveTheme = theme => {
    return dispatch => {
        dispatch(setFetchPending());
        return API.saveUserTheme(USER, theme).then(response => {
            console.warn('saveTheme FETCH: ', response);
            dispatch(saveThemeToStore(response.theme));
            dispatch(setFetchDone());
        });
    };
};

export const getSettings = settings => {
    return {
        type: GET_SETTINGS,
        settings,
    };
};

export const fetchSettingsData = () => {
    return dispatch => {
        dispatch(setFetchPending());
        return API.getSettings(USER).then(response => {
            dispatch(getSettings(response));
            dispatch(setFetchDone());
        });
    };
};

export const saveSettings = settings => {
    return dispatch => {
        dispatch(setFetchPending());
        return API.saveSettings(USER, settings).then(response => {
            console.warn('saveSettings FETCH: ', response);
            dispatch(getSettings(response));
            dispatch(setFetchDone());
        });
    };
};
