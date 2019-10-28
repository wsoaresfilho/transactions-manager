import { settings, transactions } from '../index';
import * as types from '../../actions/types';

const defaultSettings = {
    settings: {
        theme: '',
        isFetching: false,
    },
};

describe('settings reducer', () => {
    it('should return the initial state', () => {
        expect(settings(undefined, {})).toEqual(defaultSettings.settings);
    });

    it('should handle SAVE_THEME', () => {
        expect(
            settings(null, {
                type: types.SAVE_THEME,
                theme: 'dark',
            })
        ).toEqual({ theme: 'dark' });
    });
    it('should handle GET_SETTINGS', () => {
        const settingsState = {
            settings: {
                theme: 'dark',
            },
        };

        expect(
            settings(null, {
                type: types.GET_SETTINGS,
                ...settingsState,
            })
        ).toEqual({ ...settingsState.settings });
    });
    it('should handle FETCH_PENDING', () => {
        expect(
            settings(null, {
                type: types.FETCH_PENDING,
            })
        ).toEqual({ isFetching: true });
    });
    it('should handle FETCH_DONE', () => {
        expect(
            settings(null, {
                type: types.FETCH_DONE,
            })
        ).toEqual({ isFetching: false });
    });
});

const defaultTransactions = {
    allTransactions: [],
};

describe('transactions reducer', () => {
    it('should return the initial state', () => {
        expect(transactions(undefined, {})).toEqual(defaultTransactions);
    });

    it('should handle GET_TRANSACTIONS', () => {
        expect(
            transactions(null, {
                type: types.GET_TRANSACTIONS,
                transactions: [{}],
            })
        ).toEqual({ allTransactions: [{}] });
    });

    it('should handle DELETE_TRANSACTION', () => {
        const transactionsObj = {
            allTransactions: [{ value: 123, id: 111 }, { value: 456, id: 222 }],
        };
        expect(
            transactions(transactionsObj, {
                type: types.DELETE_TRANSACTION,
                id: 111,
            })
        ).toEqual({ allTransactions: [{ value: 456, id: 222 }] });
    });
});
