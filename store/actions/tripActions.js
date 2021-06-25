import axios from "../../components/supportComponents/axios"
import { TRIP_LIST_REQUEST, TRIP_LIST_SUCCESS, TRIP_LIST_FAIL, TRIP_DETAILS_REQUEST,SAVE_PAYMENT_METHOD, TRIP_DETAILS_SUCCESS, TRIP_DETAILS_FAIL, TRIP_CREATE_REVIEW_REQUEST, TRIP_CREATE_REVIEW_SUCCESS, TRIP_CREATE_REVIEW_FAIL, SAVE_BOOKING_INFO, CONFIRM_BOOKING_REQUEST, CONFIRM_BOOKING_SUCCESS, CONFIRM_BOOKING_FAIL,GET_BOOKED_TRIP_SUCCESS, GET_BOOKED_TRIP_FAIL, GET_BOOKED_TRIP_REQUEST } from '../constants/tripConstants'



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


export const createBooking = (booking) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CONFIRM_BOOKING_REQUEST
        })

        const { user: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(`/bookings`, booking, config)

        dispatch({
            type: CONFIRM_BOOKING_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CONFIRM_BOOKING_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}

export const getBookedTrip = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: GET_BOOKED_TRIP_REQUEST
        })

        const { user: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/bookings/${id}`, config)

        dispatch({
            type: GET_BOOKED_TRIP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_BOOKED_TRIP_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: SAVE_PAYMENT_METHOD,
        payload: data
    })

}