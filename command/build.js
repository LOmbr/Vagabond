exports.imag = function imag(args) {
	s = '';
	
	mapBuilds.forEach(function(element) {
		s += element + '\n';
	});
	
	return s;
	
	
	//return __dirname+'/images/'+array[getRandomInt(array.length)];
}

