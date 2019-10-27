import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TransactionsList from './TransactionsList';
import {
    deleteTransaction as deleteTransactionAction,
    fetchTransactionsData,
} from '../../actions';

export class TransactionsListContainer extends PureComponent {
    componentDidMount() {
        const { allTransactions, getAllTransactions } = this.props;
        if (allTransactions.length === 0) {
            getAllTransactions();
        }
    }

    render() {
        const { allTransactions, deleteTransaction, className } = this.props;
        return (
            <TransactionsList
                allTransactions={allTransactions}
                deleteTransaction={deleteTransaction}
                className={className}
            />
        );
    }
}

TransactionsListContainer.defaultProps = {
    className: null,
};

TransactionsListContainer.propTypes = {
    allTransactions: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.arrayOf(
            PropTypes.shape({
                description: PropTypes.string,
                value: PropTypes.number,
                id: PropTypes.string,
            })
        ),
    ]).isRequired,
    getAllTransactions: PropTypes.func.isRequired,
    deleteTransaction: PropTypes.func.isRequired,
    className: PropTypes.string,
};

const mapStateToProps = ({ transactions }) => {
    return {
        allTransactions: transactions.allTransactions,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllTransactions: () => dispatch(fetchTransactionsData()),
        deleteTransaction: transactionId =>
            dispatch(deleteTransactionAction(transactionId)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionsListContainer);
