exports.ersil = function ersil(crabe) {
	let crab = parseInt(process.env.CRABE, 10);
	crab++;
	
	s = '';
	if(crab >= 20) {
		crab = 0;
		
		if(getRandomInt(2) == 0) {
			s += pvE;
		}
		else {
			s += pmE;
		}
		
	}
	else {
		let necessaire = 20;
		necessaire = necessaire-crab;
		s += necessaire + ' manquant';
	}
	
	process.env.CRABE = crab;
	
	return s;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
