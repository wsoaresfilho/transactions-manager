import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import App from '../App';
import { setFetchDone, fetchSettingsData } from '../../actions/index';

describe('App component', () => {
    let wrapper;
    let store;
    const initialState = {
        settings: {
            theme: 'light',
            isFetching: false,
        },
        transactions: {
            allTransactions: [],
        },
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    beforeAll(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    describe('should render', () => {
        it('app element', () => {
            expect(wrapper.find('.app').length).toBe(1);
        });

        it('Header component', () => {
            expect(wrapper.find('Header').length).toBe(1);
        });

        it('LoadingOverlay element', () => {
            store.dispatch(fetchSettingsData()).then(() => {
                expect(wrapper.find('LoadingOverlay').length).toBe(1);
            });
        });

        it('LoadingOverlay element', () => {
            store.dispatch(setFetchDone());
            expect(wrapper.find('LoadingOverlay').length).toBe(0);
        });

        it('app-container element', () => {
            expect(wrapper.find('.app-container').length).toBe(1);
        });

        it('RegisterTransactionContainer', () => {
            expect(
                wrapper.find('Connect(RegisterTransactionContainer)').exists()
            ).toBeTruthy();
        });

        it('theme-switch element', () => {
            expect(wrapper.find('.theme-switch').length).toBe(1);
        });

        it('Switch element', () => {
            expect(wrapper.find('CustomizedSwitches').length).toBe(1);
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
