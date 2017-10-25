/**
 * @author lusinabrian on lusinabrian.
 * @notes: errorReducer reducer
 */

import * as types from '../actionTypes/errorActionTypes';
import initialState from './initialState';

/**
 * errorReducer reducer takes current state and action and
 * returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function errorReducer(state = initialState.errors, action) {
    switch (action.type) {
        case types.AJAX_CALL_ERROR:
            return Object.assign({}, state, {
                hasError: true
            });

        case types.FETCH_KOIN_DATA_ERROR:
            return Object.assign({}, state, {
                hasError: true,
                errorMessage: action.payload
            });

        default:
            return state;
    }
}
