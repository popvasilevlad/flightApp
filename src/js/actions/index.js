import * as ACTIONS from '../constants/action-types';
import cookie from 'react-cookies';

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
    let bookmarks = cookie.load('bookmarks');
    
    if (!bookmarks) {
        bookmarks = {
            [payload.iata]: payload
        }
    } else if (bookmarks.hasOwnProperty(payload.iata)) {
        delete bookmarks[payload.iata];
    } else {
        bookmarks[payload.iata] = payload;
    }

    cookie.save('bookmarks', bookmarks, { path: '/' });
    
    return {
        type: ACTIONS.UPDATE_BOOKMARKS,
        payload: bookmarks
    }
}

export function updateBookmarks() {
    return {
        type: ACTIONS.UPDATE_BOOKMARKS,
        payload: cookie.load('bookmarks') || ''
    }
}