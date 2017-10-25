/**
 * @author lusinabrian on lusinabrian.
 * @notes: kryptoReducer reducer
 */

import * as types from '../constants/koinActionTypes';
import initialState from './initialState';

/**
 * kryptoReducer reducer takes current state and action and
 * returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function kryptoReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_KOIN_DATA_SUCCESS:
            return Object.assign({}, state,{
                data: action.payload,
                hasError: false,
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
