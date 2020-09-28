import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools} from 'redux-devtools-extension'
import authReducer from './authReducer'

const reducer = combineReducers({
    auth: authReducer
})

export default createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(promiseMiddleware))
)