/**
 * @author lusinabrian on 24/10/17
 * @notes: Root reducer
 */

import {combineReducers} from 'redux';
import krypto from "kryptoReducer";

/**
 * Combines all reducers for use in the application
 * Uses short hand property names from ES6
 * */
const rootReducer = combineReducers({
    krypto
});

export default rootReducer;
