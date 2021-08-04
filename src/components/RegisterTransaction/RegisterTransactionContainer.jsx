import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterTransaction from './RegisterTransaction';
import { addTransaction as addTransactionAction } from '../../actions';

export const RegisterTransactionContainer = props => {
    const { addTransaction, className } = props;
    return (
        <RegisterTransaction
            className={className}
            addTransaction={addTransaction}
        />
    );
};

RegisterTransactionContainer.defaultProps = {
    className: null,
};

RegisterTransactionContainer.propTypes = {
    addTransaction: PropTypes.func.isRequired,
    className: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
    addTransaction: transaction => dispatch(addTransactionAction(transaction)),
});

export default connect(null, mapDispatchToProps)(RegisterTransactionContainer);
