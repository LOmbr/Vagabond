exports.alls = function alls(mapUser, args) {
	s = '';
	mapUser.forEach(function(element) {
		s += element + ' ';
	});
	s += '\n';

	args.forEach(function(element) {
		s += element + ' ';
	});
	
	return s;
}