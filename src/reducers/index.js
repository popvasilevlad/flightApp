import * as ACTIONS from '../constants/action-types'

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
            query: action.payload.query,
            results: action.payload.results
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