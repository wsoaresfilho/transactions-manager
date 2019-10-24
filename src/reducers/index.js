import { combineReducers } from 'redux';
import { GET_TEXT, ADD_TEXT } from '../actions/index.js';

function texts(state = { allTexts: ['testing!'] }, action) {
    switch (action.type) {
        case GET_TEXT:
            return {
                ...state,
                text: action.text,
            };
        case ADD_TEXT:
            return {
                ...state,
                allTexts: state.allTexts.concat(action.text),
            };
        default:
            return state;
    }
}

export default combineReducers({
    texts,
});
