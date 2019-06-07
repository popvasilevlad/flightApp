import * as ACTIONS from '../constants/action-types';

export function goBack(payload) {
    return {
        type: ACTIONS.GO_BACK,
        payload
    }
}

export function search(payload) {
    return {
        type: ACTIONS.SEARCH,
        payload
    }
}

export function showDetails(payload) {
    return {
        type: ACTIONS.RESULT_DETAILS_SHOW,
        payload
    }
}

export function toggleBookmark(payload) {
    return {
        type: ACTIONS.TOGGLE_BOOKMARK,
        payload
    }
}