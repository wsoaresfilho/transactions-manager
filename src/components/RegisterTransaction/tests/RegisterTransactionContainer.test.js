import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedRegisterTransactionContainer from '../RegisterTransactionContainer';

describe('RegisterTransactionContainer component', () => {
    let wrapper, store;
    const initialState = {};
    const mockStore = configureStore();

    beforeEach(() => {
        store = mockStore(initialState);
        // wrapper = shallow(<ConnectedRegisterTransactionContainer store={store} />);
        wrapper = mount(
            <Provider store={store}>
                <ConnectedRegisterTransactionContainer />
            </Provider>
        );
    });

    describe('should render', () => {
        it('RegisterTransaction component', () => {
            expect(wrapper.find('RegisterTransaction').length).toBe(1);
            expect(wrapper.length).toEqual(1);
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
