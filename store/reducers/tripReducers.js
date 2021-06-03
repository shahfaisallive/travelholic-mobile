import { TRIP_LIST_REQUEST, TRIP_LIST_SUCCESS, TRIP_LIST_FAIL, TRIP_DETAILS_REQUEST, TRIP_DETAILS_SUCCESS, TRIP_DETAILS_FAIL, TRIP_CREATE_REVIEW_REQUEST, TRIP_CREATE_REVIEW_SUCCESS, TRIP_CREATE_REVIEW_FAIL, TRIP_CREATE_REVIEW_RESET } from '../constants/tripConstants'


export const tripListReducer = (state = { trips: [] }, action) => {
    switch (action.type) {
        case TRIP_LIST_REQUEST:
            return { loading: true, trips: [] }

        case TRIP_LIST_SUCCESS:
            return { loading: false, trips: action.payload }

        case TRIP_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const tripDetailsReducer = (state = { trip: { reviews: [] } }, action) => {
    switch (action.type) {
        case TRIP_DETAILS_REQUEST:
            return { loading: true, ...state }

        case TRIP_DETAILS_SUCCESS:
            return { loading: false, trip: action.payload }

        case TRIP_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

