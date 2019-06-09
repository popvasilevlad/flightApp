import * as ACTIONS from '../constants/action-types';
import { 
    toggleBookmarkHelper,
    getSessionBookmarks,
    searchAirport
} from '../utils/helpers'

export function goBack(payload) {
    return {
        type: ACTIONS.GO_BACK,
        payload
    }
}

export function search(payload) {
    return {
        type: ACTIONS.SEARCH,
        payload: { results: searchAirport(payload), query: payload }
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
        type: ACTIONS.UPDATE_BOOKMARKS,
        payload: toggleBookmarkHelper(payload)
    }
}

export function updateBookmarks() {
    return {
        type: ACTIONS.UPDATE_BOOKMARKS,
        payload: getSessionBookmarks()
    }
}