/**
 * @author lusinabrian on 24/10/17.
 * @notes: will import the required store based on the environment
 */
if (process.env.NODE_ENV === "production") {
    module.exports = require("./configureStore.prod");
} else {
    module.exports = require("./configureStore.dev");
}