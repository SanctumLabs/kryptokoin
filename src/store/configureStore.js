/**
 * @author lusinabrian on 24/10/17.
 * @notes: will import the required store based on the environment
 */

if (__DEV__) {
    module.exports = require("./configureStore.dev");
} else {
    module.exports = require("./configureStore.prod");
}