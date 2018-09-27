require('colors');
const _ = require('lodash');

const config = require('../config/config');

// create a noop (no operation) function for when loggin is disabled
let noop = function(){};

let consoleLog = config.logging ? console.log.bind(console) : noop;

let logger = {
  log: function() {
    let tag = '[ ✨ LOG ✨ ]'.green;
    let args = _.toArray(arguments)
      .map(function(arg) {
        if(typeof arg === 'object') {
          let string = JSON.stringify(arg, null, 2);
          return tag + '  ' + string.cyan;
        } else {
          return tag + '  ' + arg.cyan;
        }
      });

    consoleLog.apply(console, args);
  },

  error: function() {
    let args = _.toArray(arguments)
      .map(function(arg) {
        arg = arg.stack || arg;
        let name = arg.name || '[ ❌ ERROR ❌ ]';
        let log = name.yellow + '  ' + arg.red;
        return log;
      });

    consoleLog.apply(console, args);
  }
};

module.exports = logger;
