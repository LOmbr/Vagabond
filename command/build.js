exports.build = function build(args, mapBuilds) {
	

	ret = new Array();
	
	if(args !== undefined) {
		s = args[0];
		if(args.length > 1) {
			s += '_' + args[1];
		}
		s+='.PNG';
		
		//return s;
		
		ret[0] = 'Rouge : obligatoire\nVert : utile';
		ret[1] = __dirname+'/build/'+ mapBuilds.get(s);
		return ret;
	}
	else {
		s = 'Utilisation : \n';
		s += '```!v build all ```\n';
		s += 'ou ```!v build nom_de_la_classe ```\n';
		s += 'ou ```!v build nom_de_la_classe specifiation```\n';
		
		
		ret[0] = s;
		ret[1] = __dirname+'/build/magicien.PNG';
		return ret;
	}
}

