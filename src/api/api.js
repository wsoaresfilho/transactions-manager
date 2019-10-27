// This file simulates an API and uses the
// browser localStorage to persis user data

const defaultUserData = {
    settings: {
        theme: 'light',
    },
    transactions: [],
};

const methods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
    PUT: 'PUT',
};

const getRandomInt = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
};

const FAKE_FETCH_TIME = getRandomInt(400, 1200);

const promiseFactory = data => {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(data);
        }, FAKE_FETCH_TIME);
    });

    promise.then(value => {
        console.warn(value);
    });

    return promise;
};

const saveLocalStorageData = (user, data) => {
    const dataJson = JSON.stringify(data);
    localStorage.setItem(user, dataJson);
    return JSON.parse(dataJson);
};

const getLocalStorageDataByUser = user => {
    const localUserData = localStorage.getItem(user);
    let userDataJson = localUserData && JSON.parse(localUserData);
    if (!userDataJson) {
        userDataJson = saveLocalStorageData(user, defaultUserData);
    }
    return userDataJson;
};

const getLocalStorage = (user, route) => {
    const localUserData = getLocalStorageDataByUser(user);
    const data = localUserData[route];
    return data;
};

const postLocalStorage = (user, route, postData) => {
    let localUserData = getLocalStorageDataByUser(user);
    if (localUserData) {
        localUserData = {
            ...localUserData,
            [route]: postData,
        };
    }
    saveLocalStorageData(user, localUserData);
    return localUserData[route];
};

const fetchFake = (user, route, method = methods.GET, postData = null) => {
    let result = promiseFactory(null);
    switch (method) {
        case methods.GET:
            result = promiseFactory(getLocalStorage(user, route));
            break;

        case methods.POST:
            result = promiseFactory(postLocalStorage(user, route, postData));
            break;

        default:
            break;
    }

    return result;
};

export const getAllTransactions = user => {
    const teste = fetchFake(user, 'transactions');
    return teste;
};

export const saveTransaction = (user, transaction) => {
    const allTransactions = getLocalStorage(user, 'transactions');
    allTransactions.push(transaction);
    return fetchFake(user, 'transactions', methods.POST, allTransactions);
};

export const deleteTransaction = (user, transactionId) => {
    const allTransactions = getLocalStorage(user, 'transactions');
    const updatedTransactions = allTransactions.filter(transaction => {
        return transaction.id !== transactionId;
    });
    return fetchFake(user, 'transactions', methods.POST, updatedTransactions);
};

export const getSettings = user => {
    return fetchFake(user, 'settings');
};

export const saveUserTheme = (user, theme) => {
    const userSettings = getLocalStorage(user, 'settings');
    const updatedSettings = {
        ...userSettings,
        theme,
    };
    return fetchFake(user, 'settings', methods.POST, updatedSettings);
};

export const saveSettings = (user, settings) => {
    const userSettings = getLocalStorage(user, 'settings');
    const updatedSettings = {
        ...userSettings,
        settings,
    };
    return fetchFake(user, 'settings', methods.POST, updatedSettings);
};
