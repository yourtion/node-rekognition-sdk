var rekognition = require('./lib/rekognition');
var fs = require('fs');
var path = require('path');

rekognition.config({
  api_key: "",
  api_secret: ""
});

rekognition.faceDetect(path.join(__dirname, 'face.jpg'),function(err,body){
	console.log(err,body);
});