import React from 'react';
import { shallow } from 'enzyme';
import RegisterTransaction from '../RegisterTransaction';

describe('RegisterTransaction component', () => {
    let wrapper;
    let instance;
    let spy;
    const props = {
        addTransaction: jest.fn(),
    };

    beforeEach(() => {
        wrapper = shallow(
            <RegisterTransaction addTransaction={props.addTransaction} />
        );
        instance = wrapper.instance();
        spy = {
            description: jest.spyOn(
                RegisterTransaction.prototype,
                'handleDescriptionChange'
            ),
            money: jest.spyOn(
                RegisterTransaction.prototype,
                'handleMoneyChange'
            ),
            type: jest.spyOn(
                RegisterTransaction.prototype,
                'handleTransactionTypeChange'
            ),
            onSubmit: jest.spyOn(RegisterTransaction.prototype, 'onSubmit'),
            transition: jest.spyOn(
                RegisterTransaction.prototype,
                'handleTransitionEnd'
            ),
            focus: jest.spyOn(
                RegisterTransaction.prototype,
                'focusDescriptionInput'
            ),
        };
    });

    afterEach(() => {
        spy.description.mockClear();
        spy.money.mockClear();
        spy.type.mockClear();
        spy.focus.mockClear();
    });

    describe('should render', () => {
        it('all elements properly', () => {
            expect(
                wrapper.find('.register-transaction__container').length
            ).toEqual(1);
            expect(wrapper.find('.register-transaction__title').length).toEqual(
                1
            );
            expect(wrapper.find('.register-transaction__title').text()).toEqual(
                'Register Transaction Form'
            );
            expect(wrapper.exists('.register-transaction__form')).toBeTruthy();
            expect(
                wrapper.exists('.register-transaction__button')
            ).toBeTruthy();
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when mounts', () => {
        it('shold focus on description', () => {
            expect(spy.focus).toHaveBeenCalled();
        });
    });

    describe('when input description', () => {
        it('should set description state', () => {
            const descriptionInput = wrapper.find('#description-input');
            const descriptionText = 'Testing description';
            const event = {
                target: {
                    value: descriptionText,
                },
            };
            descriptionInput.simulate('change', event);

            expect(instance.state.description).toEqual(descriptionText);
            expect(spy.description).toHaveBeenCalled();
        });
    });

    describe('when input money', () => {
        it('should set value state', () => {
            const moneyInput = wrapper.find('#money-input');
            const moneyText = '123.40';
            const event = {
                target: {
                    value: moneyText,
                },
            };
            moneyInput.simulate('change', event);

            expect(instance.state.value).toEqual(123.4);
            expect(spy.money).toHaveBeenCalled();
        });
    });

    describe('when change transaction type', () => {
        it('to debit, it should set isCredit state to false', () => {
            const debitInput = wrapper.find('#type-debit');
            const debitValue = 'debit';
            const event = {
                target: {
                    value: debitValue,
                },
            };
            debitInput.simulate('change', event);

            expect(instance.state.isCredit).toBe(false);
            expect(spy.type).toHaveBeenCalledTimes(1);
        });

        it('to credit, it should set isCredit state to true', () => {
            const creditInput = wrapper.find('#type-credit');
            const event = {
                target: {
                    value: 'credit',
                },
            };
            creditInput.simulate('change', event);

            expect(instance.state.isCredit).toBe(true);
            expect(spy.type).toHaveBeenCalledTimes(1);
        });

        it('should have a transition on flap element', () => {
            jest.useFakeTimers();
            instance.toggleRef.current = document.createElement('div');
            const flap = wrapper.find('#flap');
            flap.simulate('transitionend');

            expect(spy.transition).toHaveBeenCalled();
            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(
                expect.any(Function),
                400
            );
        });
    });

    describe('when submit a transaction', () => {
        it('should call addTransaction', () => {
            const descriptionInput = wrapper.find('#description-input');
            const descriptionText = 'Testing description when submiting';
            const moneyInput = wrapper.find('#money-input');
            const moneyText = '333.55';
            const debitInput = wrapper.find('#type-debit');
            const debitValue = 'debit';
            const form = wrapper.find('.register-transaction__form');
            const getEvent = value => ({
                target: {
                    value,
                },
                preventDefault: jest.fn(),
            });

            descriptionInput.simulate('change', getEvent(descriptionText));
            moneyInput.simulate('change', getEvent(moneyText));
            debitInput.simulate('change', getEvent(debitValue));

            expect(instance.state).toStrictEqual({
                isCredit: false,
                description: descriptionText,
                value: parseFloat(moneyText),
            });

            form.simulate('submit', getEvent());
            expect(instance.state).toStrictEqual({
                isCredit: true,
                description: '',
                value: '',
            });
            expect(spy.onSubmit).toHaveBeenCalledTimes(1);
            expect(spy.focus).toHaveBeenCalled();
            expect(props.addTransaction).toHaveBeenCalledTimes(1);
        });
    });
});
