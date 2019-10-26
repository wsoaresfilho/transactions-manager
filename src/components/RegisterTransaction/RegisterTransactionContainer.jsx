import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterTransaction from './RegisterTransaction';
import { addTransaction as addTransactionAction } from '../../actions';

export class RegisterTransactionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { addTransaction } = this.props;
        return <RegisterTransaction addTransaction={addTransaction} />;
    }
}

RegisterTransactionContainer.propTypes = {
    addTransaction: PropTypes.func.isRequired,
};

// function mapStateToProps({ transactions }) {
//     return {
//         allTransactions: transactions.allTransactions,
//     };
// }

function mapDispatchToProps(dispatch) {
    return {
        addTransaction: transaction =>
            dispatch(addTransactionAction(transaction)),
    };
}

export default connect(
    // mapStateToProps,
    mapDispatchToProps
)(RegisterTransactionContainer);
