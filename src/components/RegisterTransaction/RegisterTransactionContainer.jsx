import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisterTransaction from './RegisterTransaction.jsx';
import { addTransaction } from '../../actions';

class RegisterTransactionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <RegisterTransaction addTransaction={this.props.addTransaction} />
        );
    }
}

function mapStateToProps({ transactions }) {
    return {
        allTransactions: transactions.allTransactions,
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        addTransaction: transaction => dispatch(addTransaction(transaction)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterTransactionContainer);
