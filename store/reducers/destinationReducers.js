import { GET_DESTINATIONS_FAIL, GET_DESTINATIONS_REQUEST, GET_DESTINATIONS_SUCCESS, GET_DESTINATION_DETAILS_FAIL, GET_DESTINATION_DETAILS_REQUEST, GET_DESTINATION_DETAILS_SUCCESS, RATE_DESTINATION_FAIL, RATE_DESTINATION_REQUEST, RATE_DESTINATION_SUCCESS,RATE_DESTINATION_RESET} from "../constants/destinationsConstants";

export const getDestinationsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_DESTINATIONS_REQUEST:
            return { loading: true, destinations: [] }

        case GET_DESTINATIONS_SUCCESS:
            return { loading: false, destinations: action.payload }

        case GET_DESTINATIONS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const destinationDetailsReducer = (state = {loading: true}, action) => {
    switch (action.type) {
        case GET_DESTINATION_DETAILS_REQUEST:
            return { loading: true, destinationDetails: {} }

        case GET_DESTINATION_DETAILS_SUCCESS:
            return { loading: false, destinationDetails: action.payload }

        case GET_DESTINATION_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const rateDestinationReducer = (state = {}, action) => {
    switch (action.type) {
        case RATE_DESTINATION_REQUEST:
            return { loading: true }
        case RATE_DESTINATION_SUCCESS:
            return { loading: false, success: true }
        case RATE_DESTINATION_FAIL:
            return { loading: false, error: action.payload }
        case RATE_DESTINATION_RESET:
            return {}
        default:
            return state
    }
}