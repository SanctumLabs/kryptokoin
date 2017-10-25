/**
 * @author lusinabrian on lusinabrian.
 * @notes: ajaxReducer reducer
 */

import * as types from '../actionTypes/ajaxActionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === "_SUCCESS";
}

/**
 * ajaxReducer reducer takes current state and action and
 * returns a new state
 * @param state initial state of the application store
 * @param action function to dispatch to store
 * @return {Object} new state or initial state*/
export default function ajaxReducer(state = initialState.ajax, action) {
    switch (action.type) {
        case types.AJAX_CALL_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                ajaxCallsInProgress: 0
            });

        case types.AJAX_CALL_BEGIN:
            return Object.assign({}, state, {
                isFetching: true,
                ajaxCallsInProgress: 1
            });
        default:
            return state;
    }
}
