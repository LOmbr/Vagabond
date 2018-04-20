const fs = require('fs');
const files = fs.readdirSync(__dirname+'/build');


mapBuilds = new Map();
exports.imag = function imag(args) {
	genBuilds();
	//return __dirname+'/images/'+array[getRandomInt(array.length)];
}

function genBuilds() {
	for(const file of files) {	
		mapBuilds.set(file, file);
	}
}