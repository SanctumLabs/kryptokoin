/**
 * @author lusinabrian on 24/10/17.
 * @notes: Initial State of store
 */

export default {
    krypto: {
        cryptoCurrencies:[]
    },
    ajax :{
        ajaxCallsInProgress: 0,
        isFetching: false,
    },
    errors : {
        hasError: false,
        errorMessage: ""
    }
}
