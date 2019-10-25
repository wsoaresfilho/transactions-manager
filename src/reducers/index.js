import { combineReducers } from 'redux';
import { GET_TRANSACTION, ADD_TRANSACTION } from '../actions/index.js';

const defaultTransaction = {
    description: 'House Rent',
    value: 1000.0,
};
const defaultAllTransactions = {
    allTransactions: [defaultTransaction],
};

function transactions(state = defaultAllTransactions, action) {
    switch (action.type) {
        case GET_TRANSACTION:
            return {
                ...state,
                transaction: action.transaction,
            };
        case ADD_TRANSACTION:
            return {
                ...state,
                allTransactions: state.allTransactions.concat(
                    action.transaction
                ),
            };
        default:
            return state;
    }
}

export default combineReducers({
    transactions,
});
