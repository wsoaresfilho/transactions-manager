import React, { PureComponent } from 'react';
import classNames from 'classnames';
import './register.css';

const transactionType = {
    CREDIT: 'credit',
    DEBIT: 'debit',
};

class RegisterTransaction extends PureComponent {
    constructor(props) {
        super(props);

        this.formRef = React.createRef();
        this.toggleRef = React.createRef();
        this.state = {
            isCredit: true,
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.handleTransactionTypeClick = this.handleTransactionTypeClick.bind(
            this
        );
        this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        const text = event.target[0].value;
        this.props.addText(text);
        this.formRef.current.reset();
    }

    handleTransactionTypeClick(event) {
        const tranType = event.target.value;
        const isCredit = tranType === transactionType.CREDIT;
        this.setState({
            isCredit,
        });
    }

    handleTransitionEnd() {
        const signalRotation = this.state.isCredit ? '' : '-';
        this.toggleRef.current.style.transform = `rotateY(${signalRotation}15deg)`;
        setTimeout(() => (this.toggleRef.current.style.transform = ''), 400);
    }

    getTypeText() {
        return this.state.isCredit
            ? transactionType.CREDIT
            : transactionType.DEBIT;
    }

    render() {
        const { isCredit } = this.state;
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
                        className='register-transaction__input'
                        type='text'
                        placeholder='Transaction description'
                    />
                    <input
                        required
                        className='register-transaction__input'
                        type='number'
                        min='0.00'
                        step='0.01'
                        placeholder='Transaction value'
                    />

                    <div className={typeClassname} ref={this.toggleRef}>
                        <input
                            onChange={this.handleTransactionTypeClick}
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
                            onChange={this.handleTransactionTypeClick}
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

                    <button type='submit'>Add Transaction</button>
                </form>
            </div>
        );
    }
}

export default RegisterTransaction;
