var _ = require('underscore');
var request = require('request');
var fs = require('fs');

var rekognition = exports;

var _configData = require('./config')._configData;

rekognition.config = require('./config').config;

rekognition.faceDetect = function(filePath,callback) {
  var formData = {
        api_key: _configData.api_key,
        api_secret: _configData.api_secret,
        jobs: 'face_part_aggressive_gender_emotion_age_glass_mouth_open_wide_eye_closed_mustache_beard_beauty',
        uploaded_file: fs.createReadStream(filePath)
    };
    request.post({url:_configData.url, formData: formData}, function optionalCallback(err, httpResponse, body) {
        callback(err,body);
    });
}