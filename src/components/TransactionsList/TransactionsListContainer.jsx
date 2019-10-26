import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TransactionsList from './TransactionsList';
import { deleteTransaction as deleteTransactionAction } from '../../actions';

export const TransactionsListContainer = props => {
    const { allTransactions, deleteTransaction } = props;
    return (
        <TransactionsList
            allTransactions={allTransactions}
            deleteTransaction={deleteTransaction}
        />
    );
};

TransactionsListContainer.propTypes = {
    allTransactions: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string,
            value: PropTypes.number,
            id: PropTypes.string,
        })
    ).isRequired,
    deleteTransaction: PropTypes.func.isRequired,
};

function mapStateToProps({ transactions }) {
    return {
        allTransactions: transactions.transactions,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteTransaction: transactionId =>
            dispatch(deleteTransactionAction(transactionId)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionsListContainer);
