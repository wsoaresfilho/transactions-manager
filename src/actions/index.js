export const GET_TRANSACTION = 'GET_TRANSACTION';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';

export function getTransaction(transaction) {
    return {
        type: GET_TRANSACTION,
        transaction,
    };
}

export function addTransaction(transaction) {
    return {
        type: ADD_TRANSACTION,
        transaction,
    };
}
