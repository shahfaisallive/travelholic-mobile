import axios from "../../components/supportComponents/axios"
import { USER_LOGIN_FAIL,USER_LOGIN_SUCCESS,USER_LOGIN_REQUEST,USER_LOGOUT } from "../constants/userConstants"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ToastAndroid } from 'react-native'

export const userLogin = (email,password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = {
      headers: {
          'Content-Type': 'application/json'
      }
    }
    const { data } = await axios.post('/users/login', { email, password }, config)

    await AsyncStorage.setItem('user', JSON.stringify(data) )

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload:data
    })

    ToastAndroid.show(
      'Logged In Successfully',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM
  );

  } catch (error) {
      dispatch({
          type: USER_LOGIN_FAIL,
          payload: error.response && error.response.data.message ? error.response.data.message : error.message,
      })
      ToastAndroid.show(
        error.response.data.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
    );
  }
  
}

export const userLogout = () => async ( dispatch) => {
  
  await AsyncStorage.removeItem('user');

  dispatch({ type: USER_LOGOUT })

}
