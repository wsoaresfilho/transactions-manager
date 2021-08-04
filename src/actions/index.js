import * as types from './types';
import * as API from '../api/api';

// This variable is simulating a logged user
const USER = 'jose';

export const setFetchPending = () => ({
    type: types.FETCH_PENDING,
});

export const setFetchDone = () => ({
    type: types.FETCH_DONE,
});

export const getTransactions = transactions => ({
    type: types.GET_TRANSACTIONS,
    transactions,
});

export const fetchTransactionsData = () => dispatch => {
    dispatch(setFetchPending());
    return API.getAllTransactions(USER).then(response => {
        dispatch(getTransactions(response));
        dispatch(setFetchDone());
    });
};

export const addTransaction = transaction => dispatch => {
    dispatch(setFetchPending());
    return API.saveTransaction(USER, transaction).then(response => {
        dispatch(getTransactions(response));
        dispatch(setFetchDone());
    });
};

export const deleteTransaction = transactionId => dispatch => {
    dispatch(setFetchPending());
    return API.deleteTransaction(USER, transactionId).then(response => {
        dispatch(getTransactions(response));
        dispatch(setFetchDone());
    });
};

export const saveThemeToStore = theme => ({
    type: types.SAVE_THEME,
    theme,
});

export const saveTheme = theme => dispatch => {
    dispatch(setFetchPending());
    return API.saveUserTheme(USER, theme).then(response => {
        dispatch(saveThemeToStore(response.theme));
        dispatch(setFetchDone());
    });
};

export const getSettings = settings => ({
    type: types.GET_SETTINGS,
    settings,
});

export const fetchSettingsData = () => dispatch => {
    dispatch(setFetchPending());
    return API.getSettings(USER).then(response => {
        dispatch(getSettings(response));
        dispatch(setFetchDone());
    });
};
