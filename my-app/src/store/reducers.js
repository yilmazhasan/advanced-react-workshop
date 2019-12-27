import {
    SELECT_CATEGORY,
    RECEIVE_CATEGORIES,
    REQUEST_CATEGORIES,
    FAIL_CATEGORIES
} from './actions'

// The reducer function is probably the most beautiful part of Redux. 
// Even before that I was interested in writing pure functions with an immutability
//  in mind but Redux forced me to do it.
//  (1) It must be a pure function - it means that the function should return the exact same output every time when the same input is given.
// (2) It should have no side effects -
//  stuff like accessing a global variable, making an async call or waiting for a promise to resolve have no place in here.

// reducer is a function that accepts the current state and action and returns the new state.

export function reducers(state = {}, action) {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedCategory: action.category
            }

        case REQUEST_CATEGORIES:
            return {
                ...state,
                categories: {
                    loading: true,
                    data: undefined,
                    error: false
                },
                selectedCategory: undefined
            }
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories: {
                    loading: false,
                    data: action.categories,
                    error: false
                }
            }
        case FAIL_CATEGORIES:
            return {
                ...state,
                categories: {
                    loading: false,
                    data: undefined,
                    error: true
                }
            }
        default:
            return state
    }
}