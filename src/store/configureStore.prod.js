/**
 * @author lusinabrian on 24/10/17
 * @notes: Redux Production Store
 */

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import promise from "redux-promise";


/**
 * Configures the application store
 * */
export default function configureStore(initialState) {
    return createStore(
        rootReducer, initialState, applyMiddleware(thunk, promise)
    );
}