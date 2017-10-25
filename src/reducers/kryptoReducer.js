/**
 * @author lusinabrian on lusinabrian.
 * @notes: kryptoReducer reducer
 */

import * as types from '../actionTypes/koinActionTypes';
import initialState from './initialState';

/**
 * kryptoReducer reducer takes current state and action and
 * returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function kryptoReducer(state = initialState.krypto, action) {
    switch (action.type) {
        case types.FETCH_KOIN_DATA_SUCCESS:
            return Object.assign({}, state,{
                cryptoCurrencies: action.payload,
            });
        default:
            return state;
    }
}
