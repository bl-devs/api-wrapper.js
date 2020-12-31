let functions = require("./src/functions");

module.exports = {
    getBot: functions.getBot,
    version: require("./package.json").version
};