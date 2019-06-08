import cookie from 'react-cookies';

export const toggleBookmarkHelper = data => {
    let bookmarks = cookie.load('bookmarks');
    
    if (!bookmarks) {
        bookmarks = {
            [data.iata]: data
        }
    } else if (bookmarks.hasOwnProperty(data.iata)) {
        delete bookmarks[data.iata];
    } else {
        bookmarks[data.iata] = data;
    }

    cookie.save('bookmarks', bookmarks, { path: '/' });
    
    return bookmarks;
};

export const getSessionBookmarks = () => cookie.load('bookmarks') || '';
