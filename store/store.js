import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid } from 'react-native'
import { persistStore,persistReducer } from 'redux-persist';

// Importing reducers
import { destinationDetailsReducer, getDestinationsReducer } from "./reducers/destinationReducers"
import { bookedTripReducer, bookingInfoReducer, createBookingReducer, paymentMethodReducer, tripDetailsReducer, tripListReducer } from './reducers/tripReducers'
import { loginReducer } from './reducers/userReducers'

let userInfoFromStorage 
async function fetchData() {
           
    try {
        const value = await AsyncStorage.getItem('user')
        if (value !== null) {
          userInfoFromStorage=value
          ToastAndroid.show(
            value,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        );
        }
        else {
            userInfoFromStorage=null
        }
      } catch(e) {
        userInfoFromStorage=null
        // error reading value
      }
};
fetchData();

const rootReducer = combineReducers({
    user:loginReducer,
    destinationsList: getDestinationsReducer,
    destinationDetails: destinationDetailsReducer,
    tripList: tripListReducer,
    tripDetails: tripDetailsReducer,
    bookingInfo: bookingInfoReducer,
    bookingDetails: createBookingReducer,
    bookedTrip: bookedTripReducer,
    paymentMethod: paymentMethodReducer,
})

const persistConfig ={
    key:'root',
    storage:AsyncStorage,
    whitelist:["user"]
} 

const initialState = {
    user: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))

export const persistor = persistStore(store) 

