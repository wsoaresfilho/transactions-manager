import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App component', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<App />);
        // console.log(wrapper.debug())
    });

    describe('should render', () => {
        it('app element', () => {
            expect(wrapper.find('.app').length).toBe(1);
        });

        it('Header component', () => {
            expect(wrapper.find('Header').length).toBe(1);
        });

        it('app-container element', () => {
            expect(wrapper.find('.app-container').length).toBe(1);
        });

        it('RegisterTransactionContainer', () => {
            expect(
                wrapper.find('Connect(RegisterTransactionContainer)').exists()
            ).toBeTruthy();
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
