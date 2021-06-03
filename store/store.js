import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


// Importing reducers
import { destinationDetailsReducer, getDestinationsReducer } from "./reducers/destinationReducers"
import { tripDetailsReducer, tripListReducer } from './reducers/tripReducers'

const reducer = combineReducers({
    destinationsList: getDestinationsReducer,
    destinationDetails: destinationDetailsReducer,
    tripList: tripListReducer,
    tripDetails: tripDetailsReducer,
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store