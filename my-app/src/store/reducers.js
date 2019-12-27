import {
    SELECT_CATEGORY,
    RECEIVE_CATEGORIES,
    REQUEST_CATEGORIES,
    FAIL_CATEGORIES
} from './actions'

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