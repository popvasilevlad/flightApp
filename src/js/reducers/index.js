import * as ACTIONS from '../constants/action-types'
import { cookie } from 'react-cookies';

const initialState = {
    query: '',
    step: 1,
    previousStep: '',
    openedItem: '',
    bookedItems: [],
    results:[{
        name: 'name name namename name name name name name name',
        iata: 'IATA1',
        icao: 'ICAO1',
        countryCode: 'DE',
        city: 'Berlin'
      },
      {
        name: 'name2',
        iata: 'IATA2',
        icao: 'ICAO2',
        countryCode: 'RO',
        city: 'Bucharest'
      },
      {
        name: 'name3',
        iata: 'IATA3',
        icao: 'ICAO3',
        countryCode: 'HU',
        city: 'Budapest'
      }]
}

function rootReducer(state = initialState, action) {
    if (action.type === ACTIONS.GO_BACK) {
        const step = state.previousStep || --state.step;
        
        const obj = Object.assign({}, state, {
            step: action.payload
        });

        console.log('obj = ', obj);
        return Object.assign({}, state, {
            step: action.payload
        });
    }
    else if (action.type === ACTIONS.SEARCH) {
        return Object.assign({}, state, {
            step: 2,
            query: action.payload
        });
    }
    else if (action.type === ACTIONS.RESULT_DETAILS_SHOW) {
        return Object.assign({}, state, {
            openedItem: action.payload.item,
            previousStep: action.payload.previousStep,
            step: 3
        })
    }
    else if (action.type === ACTIONS.TOGGLE_BOOKMARK) {
        console.log(' handleToggleBookmark')
        let bookedItems = cookie.load('bookedItems');
        //i need to handle this before it gets here
        if (!bookedItems) {
        bookedItems = {
            [action.payload.iata]: action.payload
        }
        } else if (bookedItems.hasOwnProperty(action.payload.iata)) {
        delete bookedItems[action.payload.iata];
        } else {
        bookedItems[action.payload.iata] = action.payload;
        }

        cookie.save('bookedItems', bookedItems, { path: '/' });
        // this.updateBookedItems();
        const cookieLoad = cookie.load('bookedItems');
        const bookedItems2 = cookieLoad ? Object.keys(cookieLoad).map(key => cookie.load('bookedItems')[key]) : '';
        
        return Object.assign({}, state, {
            bookedItems: bookedItems2
        })
    }
    return state;
}

export default rootReducer;