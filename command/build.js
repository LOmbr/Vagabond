exports.build = function build(args, mapBuilds) {
	s = '';
	
	mapBuilds.forEach(function(element) {
		s += element + '\n';
	});
	
	return s;
	
	
	//return __dirname+'/images/'+array[getRandomInt(array.length)];
}

