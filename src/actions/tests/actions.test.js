import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../index';
import * as types from '../types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const defaultSettingsStore = {
    settings: {
        theme: 'light',
    },
};

describe('async actions', () => {
    it('when fetching fetchSettingsData', () => {
        const expectedActions = [
            { type: types.FETCH_PENDING },
            {
                type: types.GET_SETTINGS,
                ...defaultSettingsStore,
            },
            { type: types.FETCH_DONE },
        ];
        const store = mockStore();

        return store.dispatch(actions.fetchSettingsData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it('when fetching saveTheme', () => {
        const expectedActions = [
            { type: types.FETCH_PENDING },
            {
                type: types.SAVE_THEME,
                ...defaultSettingsStore.settings,
            },
            { type: types.FETCH_DONE },
        ];
        const store = mockStore();

        return store
            .dispatch(actions.saveTheme(defaultSettingsStore.settings.theme))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});

describe('actions', () => {
    it('should create an action to set fetch pending state', () => {
        const expectedAction = {
            type: types.FETCH_PENDING,
        };
        expect(actions.setFetchPending()).toEqual(expectedAction);
    });

    it('should create an action to set fetch done state', () => {
        const expectedAction = {
            type: types.FETCH_DONE,
        };
        expect(actions.setFetchDone()).toEqual(expectedAction);
    });

    it('should create an action to add transaction', () => {
        const transactions = [];
        const expectedAction = {
            type: types.GET_TRANSACTIONS,
            transactions,
        };
        expect(actions.getTransactions(transactions)).toEqual(expectedAction);
    });

    it('should create an action to save theme to store', () => {
        const theme = 'dark';
        const expectedAction = {
            type: types.SAVE_THEME,
            theme,
        };
        expect(actions.saveThemeToStore(theme)).toEqual(expectedAction);
    });

    it('should create an action to save theme to store', () => {
        const settings = { theme: 'dark' };
        const expectedAction = {
            type: types.GET_SETTINGS,
            settings,
        };
        expect(actions.getSettings(settings)).toEqual(expectedAction);
    });
});
