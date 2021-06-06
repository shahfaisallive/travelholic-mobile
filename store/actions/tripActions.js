import axios from "../../components/supportComponents/axios"
import { TRIP_LIST_REQUEST, TRIP_LIST_SUCCESS, TRIP_LIST_FAIL, TRIP_DETAILS_REQUEST, TRIP_DETAILS_SUCCESS, TRIP_DETAILS_FAIL, TRIP_CREATE_REVIEW_REQUEST, TRIP_CREATE_REVIEW_SUCCESS, TRIP_CREATE_REVIEW_FAIL, SAVE_BOOKING_INFO } from '../constants/tripConstants'



export const listTrips = () => async (dispatch) => {
    try {
        dispatch({ type: TRIP_LIST_REQUEST })

        const { data } = await axios.get('/trips')

        dispatch({
            type: TRIP_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TRIP_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const listTripDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: TRIP_DETAILS_REQUEST })

        const { data } = await axios.get(`/trips/${id}`)

        dispatch({
            type: TRIP_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: TRIP_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const saveBookingInfo = (data) => (dispatch) => {
    dispatch({
        type: SAVE_BOOKING_INFO,
        payload: data
    })

}