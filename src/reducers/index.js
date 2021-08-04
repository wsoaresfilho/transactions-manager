import { combineReducers } from 'redux';
import {
    DELETE_TRANSACTION,
    SAVE_THEME,
    GET_TRANSACTIONS,
    GET_SETTINGS,
    FETCH_PENDING,
    FETCH_DONE,
} from '../actions/types';

const defaultTransactions = {
    allTransactions: [],
};

export const transactions = (state = defaultTransactions, action) => {
    switch (action.type) {
        case GET_TRANSACTIONS:
            return {
                ...state,
                allTransactions: action.transactions,
            };
        case DELETE_TRANSACTION:
            return {
                ...state,
                allTransactions: state.allTransactions.filter(
                    t => t.id !== action.id
                ),
            };
        default:
            return state;
    }
};

const defaultSettings = {
    theme: '',
    isFetching: false,
};

export const settings = (state = defaultSettings, action) => {
    switch (action.type) {
        case SAVE_THEME:
            return {
                ...state,
                theme: action.theme,
            };
        case GET_SETTINGS:
            return {
                ...state,
                theme: action.settings.theme,
            };
        case FETCH_PENDING:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_DONE:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
};

export default combineReducers({
    transactions,
    settings,
});
