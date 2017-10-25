/**
 * @author lusinabrian on 25/10/17.
 * @notes: Api interface that will handle fetching data from API
 */
import axios from "axios";
import * as urls from "./constants";


/**
 * API call that will be made to get the information we need from the API endpoint
 * Returns a promise that should be resolved or rejected by action creators
 * @returns {Object}
 * */
export function getKoinDataApiCall(){
    return axios.get(`${urls.BASE_URL}/v1/ticker/?limit=10`)
}
