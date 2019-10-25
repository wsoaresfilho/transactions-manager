import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

RegisterTransactionContainer.propTypes = {
    addTransaction: PropTypes.func.isRequired,
};

function mapStateToProps({ transactions }) {
    return {
        allTransactions: transactions.allTransactions,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTransaction: transaction => dispatch(addTransaction(transaction)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterTransactionContainer);
