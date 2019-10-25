import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(<Header />);
    });

    describe('should render', () => {
        it('header element', () => {
            expect(wrapper.find('.header').length).toBe(1);
        });

        it('header__container element', () => {
            expect(wrapper.find('.header__container').length).toBe(1);
        });

        it('logo link with image', () => {
            expect(wrapper.find('a img.header__logo').length).toBe(1);
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
