exports.ersil = function ersil(crabe) {
	let crab = parseInt(process.env.CRABE, 10);
	crab++;
	
	s = '';
	if(crab >= 20) {
		crab = 0;
		s += pvE
	}
	else {
		let necessaire = 20;
		necessaire = necessaire-crab
		s += necessaire + ' manquant';
	}
	
	process.env.CRABE = crab;
	
	return s;
}