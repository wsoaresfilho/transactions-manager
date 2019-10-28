import * as types from './types';
import * as API from '../api/api';

// This variable is simulating a logged user
const USER = 'jose';

export const setFetchPending = () => {
    return {
        type: types.FETCH_PENDING,
    };
};

export const setFetchDone = () => {
    return {
        type: types.FETCH_DONE,
    };
};

export const getTransactions = transactions => {
    return {
        type: types.GET_TRANSACTIONS,
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
        type: types.SAVE_THEME,
        theme,
    };
};

export const saveTheme = theme => {
    return dispatch => {
        dispatch(setFetchPending());
        return API.saveUserTheme(USER, theme).then(response => {
            dispatch(saveThemeToStore(response.theme));
            dispatch(setFetchDone());
        });
    };
};

export const getSettings = settings => {
    return {
        type: types.GET_SETTINGS,
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
