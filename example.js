var rekognition = require('./lib/rekognition');
var fs = require('fs');
var path = require('path');

rekognition.faceDetect(path.join(__dirname, 'face.jpg'),function(err,body){
	console.log(err,body);
});