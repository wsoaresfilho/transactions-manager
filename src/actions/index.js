export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export function addTransaction(transaction) {
    return {
        type: ADD_TRANSACTION,
        transaction,
    };
}

export function deleteTransaction(transactionId) {
    return {
        type: DELETE_TRANSACTION,
        transactionId,
    };
}

export function toggleTheme(theme) {
    return {
        type: TOGGLE_THEME,
        theme,
    };
}
