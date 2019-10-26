import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TransactionsList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { allTransactions } = this.props;
        return (
            <div className='transaction-list__container'>
                <ul className='lista'>
                    {allTransactions.map(item => (
                        <li key={item.id} className='list-item'>
                            <div>{item.id}</div>
                            <div>{item.description}</div>
                            <div>{item.value}</div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

TransactionsList.propTypes = {
    allTransactions: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string,
            value: PropTypes.number,
            id: PropTypes.string,
        })
    ).isRequired,
    // deleteTransaction: PropTypes.func.isRequired,
};

export default TransactionsList;
