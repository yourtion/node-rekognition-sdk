var _ = require('underscore');

exports._configData = {
  url : 'http://rekognition.com/func/api/',
  api_key : '',
  api_secret : ''
};

exports.config = function(key, value) {
  if (arguments.length > 1 && _.isString(key)) {
    // set config data normally
    exports.config.set(key, value);
  } else {
    switch (true) {
      case _.isString(key):
        // Get config data
        return exports.config.get(key);
        break;
      case _.isObject(key):
        // Set config data with a object
        _.each(key, function(_value, _key) {
          exports.config.set(_key, _value);
        });
        break;
    }
  }
  return this;
};

/**
 * Set config data
 * @param  {String} key   key
 * @param  {Mix}    value value
 * @return {Object}       qiniu object
 */
exports.config.set = function(key, value) {
  exports._configData[key] = value;
  return this;
};

/**
 * Get config data
 * @param  {String} key   key
 * @return {Mix}          config value
 */
exports.config.get = function(key) {
  return exports._configData[key];
};