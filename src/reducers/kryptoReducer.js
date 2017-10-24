/**
 * @author lusinabrian on lusinabrian.
 * @notes: kryptoReducer reducer
 */

import * as types from '../constants/actionTypes';
import initialState from './initialState';

/**
 * kryptoReducer reducer takes current state and action and
 * returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function kryptoReducer(state = initialState, action) {
    switch (action.type) {
        case types.ACTION:
            return state;
        default:
            return state;
    }
}
