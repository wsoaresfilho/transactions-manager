import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import TransactionsListContainer from '../TransactionsListContainer';

describe('RegisterTransactionContainer component', () => {
    let wrapper;
    let store;
    const initialState = {
        transactions: {
            allTransactions: [],
        },
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <TransactionsListContainer />
            </Provider>
        );
    });

    describe('should render', () => {
        it('TransactionsListContainer component', () => {
            expect(wrapper.find('TransactionsList').length).toBe(1);
            expect(wrapper.length).toEqual(1);
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
