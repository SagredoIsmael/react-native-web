import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './reducers'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

export const configureStore = () => {
    let store = createStore(rootReducer, applyMiddleware(ReduxThunk, logger))
    return store
}


