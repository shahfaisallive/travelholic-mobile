import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

// Importing reducers
import { getDestinationsReducer } from "./reducers/destinationReducers"

const reducer = combineReducers({
    destinationsList: getDestinationsReducer
})


const store = createStore(reducer, applyMiddleware(thunk))

export default store