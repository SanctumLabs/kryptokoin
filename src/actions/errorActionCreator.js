
/**
 * @author lusinabrian on 25/10/17.
 * @notes: Error Action creators
 */
import * as types from "../actionTypes/errorActionTypes";


/**
 * fetch koin data action error
 * @param {Object} payload This is the payload information we get from the error object
 * */
export function fetchKoinDataActionError(payload) {
    return {type: types.FETCH_KOIN_DATA_ERROR, payload: payload}
}

/**
 * Action creator which will be used to dispath an error action to the store
 * */
export function ajaxCallErrorAction(){
    return { type : types.AJAX_CALL_ERROR }
}
