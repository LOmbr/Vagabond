exports.classe = function classe(param, roles) {
		
		var s = '';
		args.forEach(function(element) {
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
			if(element === 'my') {
				roles.forEach(function(element) {
					console.log(element.name);
				});
				
				s+= 'my'
			}
			if(element === 'all') {
				s += guerrierE + 'Guerrier \n' + magicienE + 'Magicien \n' + voleurE + 'Voleur \n' + archerE + 'Archer \n' + chamanE + 'Chaman \n' + amazoneE +'Amazone';
			}
				
		});
		
		return s
}
