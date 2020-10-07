import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools} from 'redux-devtools-extension'
import authReducer from './authReducer'
import partyReducer from './partyReducer'

const reducer = combineReducers({
    auth: authReducer,
    partr: partyReducer,
})

export default createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(promiseMiddleware))
)