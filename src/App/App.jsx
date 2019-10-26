import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from '../components/Header/Header';
import RegisterTransactionContainer from '../components/RegisterTransaction/RegisterTransactionContainer';
import TransactionsListContainer from '../components/TransactionsList/TransactionsListContainer';
import { toggleTheme } from '../actions';
import './app.css';

function App(props) {
    const { currentTheme } = props;
    const classname = classNames({
        app: true,
        light: currentTheme === 'light',
        dark: currentTheme === 'dark',
    });

    const handleClick = () => {
        const value = props.currentTheme === 'light' ? 'dark' : 'light';
        props.changeTheme(value);
    };

    return (
        <div className={classname}>
            <Header />
            <div className='app-container'>
                <RegisterTransactionContainer />
                <TransactionsListContainer />
            </div>
            <button type='button' onClick={handleClick}>
                Change Theme
            </button>
        </div>
    );
}

App.propTypes = {
    currentTheme: PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired,
};

function mapStateToProps({ theme }) {
    return {
        currentTheme: theme.theme,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeTheme: transaction => dispatch(toggleTheme(transaction)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
