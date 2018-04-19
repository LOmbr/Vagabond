exports.classe = function classe(param, roles) {
		
	let s = '';
	args.forEach(function(element) {
		if(element === 'my') {
			roles.forEach(function(role) {
				//s+= getInfo(role);
				s+= role +' ';
			});
			s = s.replace(/@/g, '');
			s = s.toLowerCase();
		}
		else if(element === 'all') {
			s += guerrierE + 'Guerrier \n' + magicienE + 'Magicien \n' + voleurE + 'Voleur \n' + archerE + 'Archer \n' + chamanE + 'Chaman \n' + amazoneE +'Amazone';
		}
		else {
			s += getInfo(element);
		}
	});
	
	return s
}

function getInfo(name) {
	let s = '';
	if(name === 'guerrier')
		s += guerrierA;
	if(name === 'magicien')
		s += magicienA;
	if(name === 'archer')
		s += archerA;
	if(name === 'voleur')
		s += voleurA;
	if(name === 'chaman')
		s += chamanA;
	if(name === 'amazone')
		s += amazoneA;
	return s;
}