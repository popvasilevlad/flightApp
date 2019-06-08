import * as ACTIONS from '../constants/action-types'

const mockResults = [{
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
    }
];

const initialState = {
    query: '',
    step: 1,
    previousStep: '',
    openedItem: '',
    bookmarks: [],
    results: ''
}

function rootReducer(state = initialState, action) {
    if (action.type === ACTIONS.GO_BACK) {
        return Object.assign({}, state, {
            step: state.previousStep || --state.step
        });
    }
    else if (action.type === ACTIONS.SEARCH) {
        return Object.assign({}, state, {
            step: 2,
            query: action.payload,
            results: mockResults
        });
    }
    else if (action.type === ACTIONS.RESULT_DETAILS_SHOW) {
        return Object.assign({}, state, {
            openedItem: action.payload.data,
            previousStep: action.payload.previousStep,
            step: 3
        })
    }
    else if (action.type === ACTIONS.UPDATE_BOOKMARKS) {
        return Object.assign({}, state, {
            bookmarks: action.payload
        })
    }
    
    return state;
}

export default rootReducer;