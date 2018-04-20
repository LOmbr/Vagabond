exports.build = function build(args, mapBuilds) {
	
	s = args[0];
	if(args > 1) {
		s += '_' + args[1];
	}
	return __dirname+'/build/'+mapBuilds.get(s);
}

