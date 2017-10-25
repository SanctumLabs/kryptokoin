/**
 * @author lusinabrian on 25/10/17.
 * @notes: Ajax action creators
 */
import * as types from "../actionTypes/ajaxActionTypes";

/**
 * Begin Ajax call that will be used to dispatch being ajax call
 * */
export function beginAjaxCallAction(){
    return { type : types.AJAX_CALL_BEGIN }
}

/**
 * Ajax call success action
 * */
export function ajaxCallSuccessAction(){
    return { type: types.AJAX_CALL_SUCCESS}
}