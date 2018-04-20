exports.build = function build(args, mapBuilds) {
	
	s = args[0];
	if(args > 1) {
		s += '_' + args[1];
	}
	s+='.PNG';
	
	//return s;
	return __dirname+'/build/'+s;
}

