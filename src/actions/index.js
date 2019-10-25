export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export function getAllTransactions() {
    return {
        type: GET_TRANSACTIONS,
    };
}

export function addTransaction(transaction) {
    return {
        type: ADD_TRANSACTION,
        transaction,
    };
}
