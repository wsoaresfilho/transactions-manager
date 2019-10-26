import { combineReducers } from 'redux';
import {
    ADD_TRANSACTION,
    DELETE_TRANSACTION,
    TOGGLE_THEME,
} from '../actions/index';

const defaultTransaction = {
    description: 'House Rent',
    value: 1000.0,
    id: 'default-123',
};
const defaultTransactions = {
    transactions: [defaultTransaction],
};

function transactions(state = defaultTransactions, action) {
    switch (action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.concat(action.transaction),
            };
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(t => {
                    return t.id !== action.id;
                }),
            };
        default:
            return state;
    }
}

const themes = {
    LIGHT: 'light',
    DARK: 'dark',
};

function theme(state = { theme: themes.LIGHT }, action) {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                theme: action.theme,
            };
        default:
            return state;
    }
}

export default combineReducers({
    transactions,
    theme,
});
