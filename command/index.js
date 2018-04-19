const fs = require('fs');
const files = fs.readdirSync(__dirname);

exports.index = function index() {
	
	var s = "";
	for(const file of files) {
		if (file !== 'index.js' && file !== 'init.js' && file !== 'images' && file !== 'ersil.js') {
			var tmp = file.replace('.js', '');
			
			if(needmore(tmp, true)) {
				s += needmore(tmp, false);
			}
			else {
				s += tmp;
			}
			
			s += '\n';
		}
	}
	
	s += '\n[hébergeur: Heroku]\n'
	return s;
}

function needmore(file, bool) {
	if(bool) {
		return file === 'classe';
	}
	else {
		if(file === 'classe') {
			return file + ' classe1 [classes2 all]';
		}
	}
}