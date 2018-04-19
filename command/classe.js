exports.classe = function classe(param, roles) {
		
	let s = '';
	args.forEach(function(element) {
		if(element === 'my') {
			roles.forEach(function(role) {
				s+= getInfo(role);
			});
			
			
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
	if(element === 'guerrier')
		s += guerrierA;
	if(element === 'magicien')
		s += magicienA;
	if(element === 'archer')
		s += archerA;
	if(element === 'voleur')
		s += voleurA;
	if(element === 'chaman')
		s += chamanA;
	if(element === 'amazone')
		s += amazoneA;
	return s;
}