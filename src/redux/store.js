import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

import logger from 'redux-logger'

//Import the reducers to the store
import {catalog, cart} from './Reducers/shop'

export const store = createStore(
    combineReducers({
        catalog,
        cart
    }),
    applyMiddleware(thunk, logger)
)

/* React Redux is the official React binding for Redux. It lets your React components read data from a Redux store,

and dispatch actions to the store to update data. */

/* React Redux provides <Provider />, which makes the Redux store available to the rest of your app. 

(To connect the store with all the containers ) */

/* React Redux provides a connect function for you to connect your component to the store. */

