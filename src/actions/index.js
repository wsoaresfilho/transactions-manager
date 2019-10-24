export const GET_TEXT = 'GET_TEXT';
export const ADD_TEXT = 'ADD_TEXT';

export function getText(text) {
    return {
        type: GET_TEXT,
        text,
    };
}

export function addText(text) {
    return {
        type: ADD_TEXT,
        text,
    };
}
