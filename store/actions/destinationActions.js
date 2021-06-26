import axios from "../../components/supportComponents/axios"
import { GET_DESTINATIONS_FAIL, GET_DESTINATIONS_REQUEST, GET_DESTINATIONS_SUCCESS, GET_DESTINATION_DETAILS_FAIL, GET_DESTINATION_DETAILS_REQUEST, GET_DESTINATION_DETAILS_SUCCESS, RATE_DESTINATION_FAIL, RATE_DESTINATION_REQUEST, RATE_DESTINATION_SUCCESS } from "../constants/destinationsConstants"

export const getDestinations = () => async (dispatch) => {
    try {
        dispatch({ type: GET_DESTINATIONS_REQUEST })

        const { data } = await axios.get('/destinations')

        data.sort((a, b) => (b.rating > a.rating) ? 1 : -1)

        dispatch({
            type: GET_DESTINATIONS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GET_DESTINATIONS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const getDestinationDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_DESTINATION_DETAILS_REQUEST })

        const { data } = await axios.get(`/destinations/${id}`)

        dispatch({
            type: GET_DESTINATION_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_DESTINATION_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }
}


export const rateDestination = (destId, data) => async (dispatch, getState) => {
    try {
        dispatch({
            type: RATE_DESTINATION_REQUEST
        })
        // console.log(destId)

        const {
            user: { userInfo }
        } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        }

        await axios.post(`/destinations/${destId}/rating`, data, config)

        dispatch({
            type: RATE_DESTINATION_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: RATE_DESTINATION_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}