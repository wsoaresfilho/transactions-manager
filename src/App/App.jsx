import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LoadingOverlay from 'react-loading-overlay';
import Header from '../components/Header/Header';
import RegisterTransactionContainer from '../components/RegisterTransaction/RegisterTransactionContainer';
import TransactionsListContainer from '../components/TransactionsList/TransactionsListContainer';
import { saveTheme, fetchSettingsData } from '../actions';
import './app.css';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const { fetchSettings } = this.props;
        fetchSettings();
    }

    handleClick() {
        const { changeTheme, userTheme } = this.props;
        const value = userTheme === 'light' ? 'dark' : 'light';
        changeTheme(value);
    }

    render() {
        const { userTheme, isFetching } = this.props;
        const classname = classNames({
            app: true,
            light: userTheme === 'light',
            dark: userTheme === 'dark',
        });

        return (
            <div className={classname}>
                <Header />
                <LoadingOverlay active={isFetching} spinner>
                    <div className='app-container'>
                        <RegisterTransactionContainer />
                        <TransactionsListContainer />
                        <button type='button' onClick={this.handleClick}>
                            Change Theme
                        </button>
                    </div>
                </LoadingOverlay>
            </div>
        );
    }
}

App.propTypes = {
    userTheme: PropTypes.string.isRequired,
    changeTheme: PropTypes.func.isRequired,
    fetchSettings: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
    return {
        userTheme: state.settings.theme,
        isFetching: state.settings.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeTheme: theme => dispatch(saveTheme(theme)),
        fetchSettings: () => dispatch(fetchSettingsData()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
