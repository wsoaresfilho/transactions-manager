import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterTransaction from './RegisterTransaction';
import { addTransaction as addTransactionAction } from '../../actions';

export const RegisterTransactionContainer = props => {
    const { addTransaction } = props;
    return <RegisterTransaction addTransaction={addTransaction} />;
};

RegisterTransactionContainer.propTypes = {
    addTransaction: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
    return {
        addTransaction: transaction =>
            dispatch(addTransactionAction(transaction)),
    };
}

export default connect(
    null,
    mapDispatchToProps
)(RegisterTransactionContainer);
