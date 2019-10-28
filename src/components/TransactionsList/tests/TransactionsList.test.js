import React from 'react';
import { shallow } from 'enzyme';
import TransactionsList from '../TransactionsList';

describe('RegisterTransaction component', () => {
    let wrapper;
    let instance;
    let spy;
    const props = {
        deleteTransaction: jest.fn(),
    };

    const mockTransactions = [
        {
            description: 'item 1',
            value: 10,
            id: 'id1',
        },
        {
            description: 'item 2',
            value: -20,
            id: 'id2',
        },
        {
            description: 'item 3',
            value: 110.5,
            id: 'id3',
        },
    ];

    beforeEach(() => {
        wrapper = shallow(
            <TransactionsList
                deleteTransaction={props.deleteTransaction}
                allTransactions={[...mockTransactions]}
            />
        );
        instance = wrapper.instance();
        spy = {
            delete: jest.spyOn(TransactionsList.prototype, 'handleDeleteClick'),
        };
    });

    afterEach(() => {
        spy.delete.mockClear();
    });

    describe('when there are no transactions', () => {
        it('should render', () => {
            wrapper = shallow(
                <TransactionsList
                    deleteTransaction={props.deleteTransaction}
                    allTransactions={[]}
                />
            );

            expect(wrapper.find('.transaction-list__container').length).toEqual(
                1
            );
            expect(wrapper.find('.transaction-list__list').length).toEqual(1);
            expect(wrapper.find('.transaction-list_empty').text()).toEqual(
                'There are no items registered'
            );
            expect(wrapper.find('.transaction-list__list-title').length).toBe(
                1
            );
            expect(
                wrapper.find('.transaction-list__item-description').text()
            ).toEqual('Description');
            expect(
                wrapper.find('.transaction-list__item-badge').text()
            ).toEqual('Type');
            expect(
                wrapper.find('.transaction-list__item-value').text()
            ).toEqual('Value');
            // expect(
            //     wrapper.exists('.transaction-list__item-delete-btn')
            // ).toBeTruthy();
        });

        it('snapshot correctly', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when there are some transactions', () => {
        it('should render', () => {
            expect(wrapper.exists('.transaction-list_empty')).toBeFalsy();
            expect(wrapper.find('.transaction-list__list-item').length).toEqual(
                mockTransactions.length
            );
            expect(
                wrapper
                    .find('.transaction-list__item-description')
                    .at(3)
                    .text()
            ).toEqual(mockTransactions[0].description);
            expect(
                wrapper
                    .find('.transaction-list__item-badge')
                    .at(3)
                    .text()
            ).toBe('Credit');
            expect(
                wrapper
                    .find('.transaction-list__item-value')
                    .at(3)
                    .text()
            ).toEqual('10.00');
            expect(
                wrapper
                    .find('.hidden-id')
                    .at(2)
                    .text()
            ).toEqual(mockTransactions[0].id);

            expect(
                wrapper
                    .find('.transaction-list__item-description')
                    .at(2)
                    .text()
            ).toEqual(mockTransactions[1].description);
            expect(
                wrapper
                    .find('.transaction-list__item-badge')
                    .at(2)
                    .text()
            ).toBe('Debit');
            expect(
                wrapper
                    .find('.transaction-list__item-value')
                    .at(2)
                    .text()
            ).toEqual('-20.00');
            expect(
                wrapper
                    .find('.hidden-id')
                    .at(1)
                    .text()
            ).toEqual(mockTransactions[1].id);

            expect(
                wrapper
                    .find('.transaction-list__item-description')
                    .at(1)
                    .text()
            ).toEqual(mockTransactions[2].description);
            expect(
                wrapper
                    .find('.transaction-list__item-badge')
                    .at(1)
                    .text()
            ).toBe('Credit');
            expect(
                wrapper
                    .find('.transaction-list__item-value')
                    .at(1)
                    .text()
            ).toEqual('110.50');
            expect(
                wrapper
                    .find('.hidden-id')
                    .at(0)
                    .text()
            ).toEqual(mockTransactions[2].id);

            expect(
                wrapper.find('.transaction-list__item-delete-btn').length
            ).toEqual(mockTransactions.length + 1);
        });

        describe('and click in the first delete button', () => {
            it('should delete the first transaction item', () => {
                wrapper
                    .find('.transaction-list__item-delete-btn')
                    .at(1)
                    .simulate('click');

                expect(spy.delete).toHaveBeenCalledTimes(1);
                expect(instance.props.deleteTransaction).toHaveBeenCalledWith(
                    mockTransactions[2].id
                );
            });
        });
    });
});
