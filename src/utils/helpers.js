import cookie from 'react-cookies';
import _ from 'lodash';

import * as airports from '../constants/airports';

window._ = _;
window.airports = airports;

export const toggleBookmarkHelper = data => {
    let bookmarks = cookie.load('bookmarks');
    
    if (!bookmarks) {
        bookmarks = {
            [data.code]: data
        }
    } else if (bookmarks.hasOwnProperty(data.code)) {
        delete bookmarks[data.code];
    } else {
        bookmarks[data.code] = data;
    }

    cookie.save('bookmarks', bookmarks, { path: '/' });
    
    return bookmarks;
};

export const getSessionBookmarks = () => cookie.load('bookmarks') || '';

export const searchAirport = query => {
    query = query.toUpperCase();
    
    return _.filter(airports, item =>  
        (item.city && item.city.toUpperCase().search(query) > -1) ||
        (item.code && item.code.toUpperCase().search(query) > -1)
    );
}
