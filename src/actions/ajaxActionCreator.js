/**
 * @author lusinabrian on 25/10/17.
 * @notes: Ajax action creators
 */
import * as types from "../constants/ajaxActionTypes";

/**
 * Begin Ajax call that will be used to dispatch being ajax call
 * */
export function beginAjaxCallAction(){
    return { type : types.AJAX_CALL_BEGIN }
}

/**
 * Action creator which will be used to dispath an error action to the store
 * */
export function ajaxCallErrorAction(){
    return { type : types.AJAX_CALL_ERROR }
}

/**
 * Ajax call success action
 * */
export function ajaxCallSuccessAction(){
    return { type: types.AJAX_CALL_SUCCESS}
}