const fs = require('fs');
const files = fs.readdirSync(__dirname+'/images');


array = new Array();
exports.imag = function imag(msg) {
	genArray();
	return __dirname+'/images/'+array[getRandomInt(array.length)];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function genArray() {
	
	array = new Array();
	
	for(const file of files) {
		if (file !== 'index.js' && file !== 'init.js' && file !== 'images') {		
			array.push(file);
		}
	}
}