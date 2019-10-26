import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqid from 'uniqid';
import './styles.css';

const transactionType = {
    CREDIT: 'credit',
    DEBIT: 'debit',
};

const defaultState = {
    isCredit: true,
    description: '',
    value: '',
};

class RegisterTransaction extends PureComponent {
    constructor(props) {
        super(props);

        this.formRef = React.createRef();
        this.descriptionRef = React.createRef();
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

    componentDidMount() {
        this.focusDescriptionInput();
    }

    onSubmit(event) {
        event.preventDefault();
        const { isCredit, ...transaction } = this.state;
        const { addTransaction } = this.props;
        const value = isCredit ? transaction.value : transaction.value * -1;
        const id = uniqid();

        addTransaction({
            ...transaction,
            value,
            id,
        });
        this.setState(defaultState);
        this.focusDescriptionInput();
    }

    getTypeText() {
        const { isCredit } = this.state;
        return isCredit ? transactionType.CREDIT : transactionType.DEBIT;
    }

    focusDescriptionInput() {
        this.descriptionRef.current.focus();
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
        const { value } = event.target;
        const moneyValue =
            typeof value === 'number' ? parseFloat(value) : value;

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
                    autoComplete='off'
                >
                    <input
                        required
                        id='description-input'
                        className='register-transaction__input'
                        type='text'
                        value={description}
                        placeholder='Transaction description'
                        onChange={this.handleDescriptionChange}
                        ref={this.descriptionRef}
                    />
                    <input
                        required
                        id='money-input'
                        className='register-transaction__input'
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={value}
                        placeholder='Transaction value'
                        onChange={this.handleMoneyChange}
                    />

                    <div
                        role='group'
                        className={typeClassname}
                        ref={this.toggleRef}
                    >
                        <input
                            onChange={this.handleTransactionTypeChange}
                            type='radio'
                            id='type-credit'
                            name='type'
                            value={transactionType.CREDIT}
                            checked={isCredit}
                        />
                        <label id='type-credit__label' htmlFor='type-credit'>
                            Credit
                        </label>

                        <input
                            onChange={this.handleTransactionTypeChange}
                            type='radio'
                            id='type-debit'
                            name='type'
                            value={transactionType.DEBIT}
                            checked={!isCredit}
                        />
                        <label id='type-debit__label' htmlFor='type-debit'>
                            Debit
                        </label>

                        <div
                            id='flap'
                            onTransitionEnd={this.handleTransitionEnd}
                        >
                            <span className='content'>{typeText}</span>
                        </div>
                    </div>

                    <button
                        className='register-transaction__button hover-shadow'
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
