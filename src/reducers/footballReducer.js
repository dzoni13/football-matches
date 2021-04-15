import {
    MENU_ITEMS_LOADED, MENU_ITEMS_LOADING_FAIL,
} from "../actions/footballAction.js";

const initialState = {
    isFailed: false,
    matche: null,
    matches: null,
};

export default function footballReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case MENU_ITEMS_LOADED:
            return {
                ...state,
                isFailed: false,
                matches: payload,
            };
        case MENU_ITEMS_LOADING_FAIL:
            return {
                ...state,
                isFailed: true,
            };
        default:
            return state;

    }
}