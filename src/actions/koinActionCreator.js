/**
 * @author lusinabrian on 25/10/17.
 * @notes: Action creators for fetching koin data
 */
import * as types from "../constants/koinActionTypes";
import { getKoinDataApiCall } from "../api/kryptoKoinApi";
import { beginAjaxCallAction, ajaxCallErrorAction, ajaxCallSuccessAction } from "./ajaxActionCreator";


/**
 * fetch koin data action error
 * @param {Object} payload This is the payload information we get from the error object
 * */
export function fetchKoinDataActionError(payload) {
    return {type: types.FETCH_KOIN_DATA_ERROR, payload: payload}
}

/**
 * fetch koin data action success
 * Fetch Koin data action creator. This will be dispatched to the Redux store with the action
 * type and the payload which contains the Koin data
 * This will be used to update the Redux store with the information of the coin data we need
 * @param {Object} payload This is the payload information we get from the error object
 * */
export function fetchKoinDataActionSuccess(payload) {
    return {type: types.FETCH_KOIN_DATA_SUCCESS, payload: payload}
}

/**
 * This will fetch the data and return a resolved promise or rejected promise from the API
 * This will dispatch the actions to the Redux store that will be able to update the store
 *
 * */
export function getKoinData() {
    return dispatch => {
        dispatch(beginAjaxCallAction());
        return getKoinDataApiCall().then(response => {
            dispatch(ajaxCallSuccessAction());
            dispatch(fetchKoinDataActionSuccess(response.data));
        }).catch(err => {
            dispatch(ajaxCallErrorAction());
            dispatch(fetchKoinDataActionError(err.data));
        })
    }
}
