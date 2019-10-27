import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LoadingOverlay from 'react-loading-overlay';
import Header from '../components/Header/Header';
import RegisterTransactionContainer from '../components/RegisterTransaction/RegisterTransactionContainer';
import TransactionsListContainer from '../components/TransactionsList/TransactionsListContainer';
import Switch from './Switch';
import { saveTheme, fetchSettingsData } from '../actions';
import './app.css';

class App extends PureComponent {
    constructor(props) {
        super(props);

        this.handleThemeChange = this.handleThemeChange.bind(this);
    }

    componentDidMount() {
        const { fetchSettings } = this.props;
        fetchSettings();
    }

    handleThemeChange() {
        const { changeTheme, userTheme } = this.props;
        const value = userTheme === 'light' ? 'dark' : 'light';
        changeTheme(value);
    }

    render() {
        const { userTheme, isFetching } = this.props;
        const appClassnames = classNames({
            app: true,
            light: userTheme === 'light',
            dark: userTheme === 'dark',
        });
        const formsClassnames = classNames({
            'area-container': true,
        });
        const isDarkTheme = userTheme === 'dark';

        return (
            <div className={appClassnames}>
                <Header />
                <LoadingOverlay active={isFetching} spinner fadeSpeed={300}>
                    {userTheme !== '' && (
                        <div className='app-container'>
                            <RegisterTransactionContainer
                                className={formsClassnames}
                            />
                            <TransactionsListContainer
                                className={formsClassnames}
                            />
                            <div className='theme-switch'>
                                <Switch
                                    onChange={this.handleThemeChange}
                                    isChecked={isDarkTheme}
                                />
                            </div>
                        </div>
                    )}
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
