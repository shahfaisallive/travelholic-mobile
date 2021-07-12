import { TRIP_LIST_REQUEST, TRIP_LIST_SUCCESS, TRIP_LIST_FAIL, TRIP_DETAILS_REQUEST, TRIP_CREATE_REVIEW_RESET, SAVE_PAYMENT_METHOD, TRIP_DETAILS_SUCCESS, TRIP_DETAILS_FAIL, SAVE_BOOKING_INFO, CONFIRM_BOOKING_REQUEST, CONFIRM_BOOKING_FAIL, CONFIRM_BOOKING_SUCCESS, GET_BOOKED_TRIP_SUCCESS, GET_BOOKED_TRIP_FAIL, GET_BOOKED_TRIP_REQUEST, TRIP_CREATE_REVIEW_REQUEST, TRIP_CREATE_REVIEW_SUCCESS, TRIP_CREATE_REVIEW_FAIL, CANCEL_BOOKING_FAIL, CANCEL_BOOKING_SUCCESS, CANCEL_BOOKING_REQUEST, GET_USER_BOOKINGS_FAIL, GET_USER_BOOKINGS_SUCCESS, GET_USER_BOOKINGS_REQUEST, CANCEL_BOOKING_RESET, } from '../constants/tripConstants'


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


export const tripDetailsReducer = (state = { loading: true, trip: { reviews: [] } }, action) => {
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


export const bookingInfoReducer = (state = {}, action) => {
    switch (action.type) {
        case SAVE_BOOKING_INFO:
            return action.payload

        default:
            return state
    }
}


export const createBookingReducer = (state = {}, action) => {
    switch (action.type) {
        case CONFIRM_BOOKING_REQUEST:
            return {
                loading: true
            }

        case CONFIRM_BOOKING_SUCCESS:
            return {
                loading: false,
                success: true,
                booking: action.payload
            }

        case CONFIRM_BOOKING_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        default: return state
    }
}


export const bookedTripReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case GET_BOOKED_TRIP_REQUEST:
            return { loading: true, ...state }

        case GET_BOOKED_TRIP_SUCCESS:
            return { loading: false, bookedTrip: action.payload }

        case GET_BOOKED_TRIP_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const paymentMethodReducer = (state = { paymentMethod: null }, action) => {
    switch (action.type) {
        case SAVE_PAYMENT_METHOD:
            return {
                paymentMethod: action.payload
            }

        default:
            return state
    }
}


export const tripCreateReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case TRIP_CREATE_REVIEW_REQUEST:
            return { loading: true }
        case TRIP_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true }
        case TRIP_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }
        case TRIP_CREATE_REVIEW_RESET:
            return {}
        default:
            return state
    }
}


export const cancelBookingReducer = (state = { success: false }, action) => {
    switch (action.type) {
        case CANCEL_BOOKING_REQUEST:
            return {
                loading: true
            }

        case CANCEL_BOOKING_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case CANCEL_BOOKING_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CANCEL_BOOKING_RESET:
            return state

        default: return state

    }
}



export const userBookingsReducer = (state = { loading: true, bookings: [] }, action) => {
    switch (action.type) {
        case GET_USER_BOOKINGS_REQUEST:
            return { loading: true, ...state }

        case GET_USER_BOOKINGS_SUCCESS:
            return { loading: false, bookings: action.payload }

        case GET_USER_BOOKINGS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}