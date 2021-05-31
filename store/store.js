import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'


// Importing reducers
import { destinationDetailsReducer, getDestinationsReducer } from "./reducers/destinationReducers"

const reducer = combineReducers({
    destinationsList: getDestinationsReducer,
    destinationDetails: destinationDetailsReducer
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store