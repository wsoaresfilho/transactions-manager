import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles/register.css';

const transactionType = {
    CREDIT: 'credit',
    DEBIT: 'debit',
};

const defaultState = {
    isCredit: true,
    description: '',
    value: 0.0,
};

class RegisterTransaction extends PureComponent {
    constructor(props) {
        super(props);

        this.formRef = React.createRef();
        this.toggleRef = React.createRef();
        this.state = defaultState;

        this.onSubmit = this.onSubmit.bind(this);
        this.handleTransactionTypeChange = this.handleTransactionTypeChange.bind(
            this
        );
        this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleMoneyChange = this.handleMoneyChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const { isCredit, ...transaction } = this.state;
        const { addTransaction } = this.props;
        const value = isCredit ? transaction.value : transaction.value * -1;

        addTransaction({
            ...transaction,
            value,
        });
        this.setState(defaultState);
    }

    getTypeText() {
        const { isCredit } = this.state;
        return isCredit ? transactionType.CREDIT : transactionType.DEBIT;
    }

    handleTransitionEnd() {
        const { isCredit } = this.state;
        const signalRotation = isCredit ? '' : '-';
        this.toggleRef.current.style.transform = `rotateY(${signalRotation}15deg)`;
        setTimeout(() => {
            this.toggleRef.current.style.transform = '';
        }, 400);
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value,
        });
    }

    handleMoneyChange(event) {
        const moneyValue = parseFloat(event.target.value);

        this.setState({
            value: moneyValue,
        });
    }

    handleTransactionTypeChange(event) {
        const tranType = event.target.value;
        const isCredit = tranType === transactionType.CREDIT;
        this.setState({
            isCredit,
        });
    }

    render() {
        const { isCredit, description, value } = this.state;
        const typeText = this.getTypeText();
        const typeClassname = classNames({
            credit: isCredit,
            debit: !isCredit,
            'register-transaction__radio': true,
        });
        return (
            <div className='register-transaction__container'>
                <h1 className='register-transaction__title'>
                    Register Transaction Form
                </h1>
                <form
                    className='register-transaction__form'
                    onSubmit={this.onSubmit}
                    ref={this.formRef}
                >
                    <input
                        required
                        id='description-input'
                        className='register-transaction__input'
                        type='text'
                        value={description}
                        placeholder='Transaction description'
                        onChange={this.handleDescriptionChange}
                    />
                    <input
                        required
                        id='money-input'
                        className='register-transaction__input'
                        type='number'
                        min='0.00'
                        step='0.01'
                        value={value}
                        placeholder='Transaction value'
                        onChange={this.handleMoneyChange}
                    />

                    <div className={typeClassname} ref={this.toggleRef}>
                        <label id='type-credit__label' htmlFor='type-credit'>
                            Credit
                            <input
                                onChange={this.handleTransactionTypeChange}
                                type='radio'
                                id='type-credit'
                                name='type'
                                value={transactionType.CREDIT}
                                checked={isCredit}
                            />
                        </label>

                        <label id='type-debit__label' htmlFor='type-debit'>
                            Debit
                            <input
                                onChange={this.handleTransactionTypeChange}
                                type='radio'
                                id='type-debit'
                                name='type'
                                value={transactionType.DEBIT}
                                checked={!isCredit}
                            />
                        </label>

                        <div
                            id='flap'
                            onTransitionEnd={this.handleTransitionEnd}
                        >
                            <span className='content'>{typeText}</span>
                        </div>
                    </div>

                    <button
                        className='register-transaction__button'
                        type='submit'
                    >
                        Add Transaction
                    </button>
                </form>
            </div>
        );
    }
}

RegisterTransaction.propTypes = {
    addTransaction: PropTypes.func.isRequired,
};

export default RegisterTransaction;
