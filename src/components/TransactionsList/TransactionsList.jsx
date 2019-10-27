import React, { PureComponent } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { moneyFormat, moneyFormatIntl } from '../../utils/helpers';
import './styles.css';

class TransactionsList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleDeleteClick(id) {
        const { deleteTransaction } = this.props;
        deleteTransaction(id);
    }

    render() {
        const { allTransactions, className } = this.props;
        const containerClassnames = `transaction-list__container ${className}`;
        const totalBalance = allTransactions.reduce((acc, curr) => {
            return acc + curr.value;
        }, 0);

        return (
            <div>
                <div className={containerClassnames}>
                    <ul className='transaction-list__list'>
                        <li
                            key='list-item-title'
                            className='transaction-list__list-title'
                        >
                            <span className='transaction-list__item-description'>
                                Description
                            </span>
                            <span className='transaction-list__item-badge'>
                                Type
                            </span>
                            <span className='transaction-list__item-value'>
                                Value
                            </span>
                            <button
                                className='transaction-list__item-delete-btn'
                                type='button'
                            >
                                X
                            </button>
                        </li>
                        {allTransactions.length === 0 && (
                            <span className='transaction-list_empty transaction-list__list-item'>
                                There are no item registered
                            </span>
                        )}
                        {allTransactions.reverse().map(item => {
                            const isCredit = item.value >= 0;
                            const itemClasses = classnames({
                                'transaction-list__list-item': true,
                                debit: !isCredit,
                                credit: isCredit,
                            });
                            const maneyValue = moneyFormat(item.value);

                            return (
                                <li key={item.id} className={itemClasses}>
                                    <span className='transaction-list__item-description'>
                                        {item.description}
                                    </span>
                                    <span className='transaction-list__item-badge'>
                                        {isCredit ? 'Credit' : 'Debit'}
                                    </span>
                                    <span className='transaction-list__item-value'>
                                        {maneyValue}
                                    </span>
                                    <span hidden className='hidden-id'>
                                        {item.id}
                                    </span>
                                    <button
                                        className='transaction-list__item-delete-btn'
                                        type='button'
                                        title='Delete transaction'
                                        onClick={() =>
                                            this.handleDeleteClick(item.id)
                                        }
                                    >
                                        X
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='transaction-list__footer'>
                    <span>Final Balance:</span>
                    <span>{moneyFormatIntl(totalBalance)}</span>
                </div>
            </div>
        );
    }
}

TransactionsList.defaultProps = {
    className: null,
};

TransactionsList.propTypes = {
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
    deleteTransaction: PropTypes.func.isRequired,
    className: PropTypes.string,
};

export default TransactionsList;
