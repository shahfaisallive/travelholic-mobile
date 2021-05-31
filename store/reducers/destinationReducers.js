import { GET_DESTINATIONS_FAIL, GET_DESTINATIONS_REQUEST, GET_DESTINATIONS_SUCCESS, GET_DESTINATION_DETAILS_FAIL, GET_DESTINATION_DETAILS_REQUEST, GET_DESTINATION_DETAILS_SUCCESS } from "../constants/destinationsConstants";

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