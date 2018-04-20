

exports.gen = function gen(client, members, mapUser) {
	
	members.forEach(function(element) {
		if(!element['bot']) {
			mapUser.set(element['username'], '<@'+element['id']+'>');
		}
	});
	
	genClasses(client);
	genEmojis(client);
	genClasse(client);
	genBuilds
}

function genClasses(client) {
	//Classes guerrier
	guerrier = client.emojis.find("name", "guerrier");
	chevalier = client.emojis.find("name", "chevalier");
	gladiateur = client.emojis.find("name", "gladiateur");
	paladin = client.emojis.find("name", "paladin");
	myrmidon = client.emojis.find("name", "myrmidon");
	dragon = client.emojis.find("name", "dragon");
	destructeur = client.emojis.find("name", "destructeur");
	
	//Classes magicien
	magicien = client.emojis.find("name", "magicien");
	mage = client.emojis.find("name", "mage");
	moine = client.emojis.find("name", "moine");
	archimage = client.emojis.find("name", "archimage");
	pretre = client.emojis.find("name", "pretre");
	arcaniste = client.emojis.find("name", "arcaniste");
	oracle = client.emojis.find("name", "oracle");
	
	//Classes archer
	archer = client.emojis.find("name", "archer");
	eclaireur = client.emojis.find("name", "eclaireur");
	arbaletrier = client.emojis.find("name", "arbaletrier");
	ranger = client.emojis.find("name", "ranger");
	grenadier = client.emojis.find("name", "grenadier");
	sentinelle = client.emojis.find("name", "sentinelle");
	commando = client.emojis.find("name", "commando");
	
	//Classes voleur
	voleur = client.emojis.find("name", "voleur");
	acrobate = client.emojis.find("name", "acrobate");
	assassin = client.emojis.find("name", "assassin");
	arlequin = client.emojis.find("name", "arlequin");
	ninja = client.emojis.find("name", "ninja");
	voltigeur = client.emojis.find("name", "voltigeur");
	ombre = client.emojis.find("name", "ombre");
	
	//Classes chaman
	chaman = client.emojis.find("name", "chaman");
	invocateur = client.emojis.find("name", "invocateur");
	demoniste = client.emojis.find("name", "demoniste");
	elementaliste = client.emojis.find("name", "elementaliste");
	
	//Classes amazone
	amazone = client.emojis.find("name", "amazone");
	valkyrie = client.emojis.find("name", "valkyrie");
	mirage = client.emojis.find("name", "mirage");
	furie = client.emojis.find("name", "furie");
	
	//potion
	pv = client.emojis.find("name", "pv");
	pm = client.emojis.find("name", "pm");
}

function genEmojis(client) {
	//Classes guerrier
	guerrierE = '<:guerrier:'+guerrier.id+'>';
	chevalierE = '<:chevalier:'+chevalier.id+'>';
	gladiateurE = '<:gladiateur:'+gladiateur.id+'>';
	paladinE = '<:paladin:'+paladin.id+'>';
	myrmidonE = '<:myrmidon:'+myrmidon.id+'>';
	dragonE = '<:dragon:'+dragon.id+'>';
	destructeurE = '<:destructeur:'+destructeur.id+'>';
	
	//Classes magicien
	magicienE = '<:magicien:'+magicien.id+'>';
	mageE = '<:mage:'+mage.id+'>';
	moineE = '<:moine:'+moine.id+'>';
	archimageE = '<:archimage:'+archimage.id+'>';
	pretreE = '<:pretre:'+pretre.id+'>';
	arcanisteE = '<:arcaniste:'+arcaniste.id+'>';
	oracleE = '<:oracle:'+oracle.id+'>';
	
	//Classes archer
	archerE = '<:archer:'+archer.id+'>';
	eclaireurE = '<:eclaireur:'+eclaireur.id+'>';
	arbaletrierE = '<:arbaletrier:'+arbaletrier.id+'>';
	rangerE = '<:ranger:'+ranger.id+'>';
	grenadierE = '<:grenadier:'+grenadier.id+'>';
	sentinelleE = '<:sentinelle:'+sentinelle.id+'>';
	commandoE = '<:commando:'+commando.id+'>';
	
	//Classes voleur
	voleurE = '<:voleur:'+voleur.id+'>';
	acrobateE = '<:acrobate:'+acrobate.id+'>';
	assassinE = '<:assassin:'+assassin.id+'>';
	arlequinE = '<:arlequin:'+arlequin.id+'>';
	ninjaE = '<:ninja:'+ninja.id+'>';
	voltigeurE = '<:voltigeur:'+voltigeur.id+'>';
	ombreE = '<:ombre:'+ombre.id+'>';
	
	//Classes chaman
	chamanE = '<:chaman:'+chaman.id+'>';
	invocateurE = '<:invocateur:'+invocateur.id+'>';
	demonisteE = '<:demoniste:'+demoniste.id+'>';
	elementalisteE = '<:elementaliste:'+elementaliste.id+'>';
	
	//Classes amazone
	amazoneE = '<:amazone:'+amazone.id+'>';
	valkyrieE = '<:valkyrie:'+valkyrie.id+'>';
	mirageE = '<:mirage:'+mirage.id+'>';
	furieE = '<:furie:'+furie.id+'>';
	
	//potion
	pvE = '<:pv:'+pv.id+'>';
	pmE = '<:pm:'+pm.id+'>';
}

function genClasse(client) {
	//Classes guerrier
	guerrierA = '\nGuerrier ' + guerrierE + '\n';
	guerrierA += '-- Chevalier ' + chevalierE + '\n';
	guerrierA += '------ Paladin ' + paladinE + '\n';
	guerrierA += '---------- Dragon ' + dragonE + '\n';
		
	guerrierA += '-- Gladiateur ' + gladiateurE + '\n';
	guerrierA += '------ Myrmidon ' + myrmidonE + '\n';
	guerrierA += '---------- Destructeur ' + destructeurE + '\n';
	
	//Classes magicien
	magicienA = '\nMagicien ' + magicienE + '\n';
	magicienA += '-- Mage ' + mageE + '\n';
	magicienA += '------ Archimage ' + archimageE + '\n';
	magicienA += '---------- Arcaniste ' + arcanisteE + '\n';

	magicienA += '-- Moine ' + moineE + '\n';
	magicienA += '------ Prêtre ' + pretreE + '\n';
	magicienA += '---------- Oracle ' + oracleE + '\n';

	//Classes archer
	archerA = '\nArcher ' + archerE + '\n';
	archerA += '-- Éclaireur ' + eclaireurE + '\n';
	archerA += '------ Ranger ' + rangerE + '\n';
	archerA += '---------- Sentinelle ' + sentinelleE + '\n';

	archerA += '-- Arbalètrier ' + arbaletrierE + '\n';
	archerA += '------ Grenadier ' + grenadierE + '\n';
	archerA += '---------- Commando ' + commandoE + '\n';

	//Classes voleur
	voleurA = '\nVoleur ' + voleurE + '\n';
	voleurA += '-- Acrobate ' + acrobateE + '\n';
	voleurA += '------ Arlequin ' + arlequinE + '\n';
	voleurA += '---------- Voltigeur ' + voltigeurE + '\n';

	voleurA += '-- Assassin ' + assassinE + '\n';
	voleurA += '------ Ninja ' + ninjaE + '\n';
	voleurA += '---------- Ombre ' + ombreE + '\n';

	//Classes chaman
	chamanA = '\nChaman ' + chamanE + '\n';
	chamanA += '-- Invocateur ' + invocateurE + '\n';
	chamanA += '------ Démonsite' + demonisteE + '\n';
	chamanA += '---------- Élémentaliste ' + elementalisteE + '\n';

	//Classes amazone
	amazoneA = '\nAmazone ' + amazoneE + '\n';
	amazoneA += '-- Valkyrie ' + valkyrieE + '\n';
	amazoneA += '------ Mirage' + mirageE + '\n';
	amazoneA += '---------- Furie Drakan ' + furieE + '\n';
}

const fs = require('fs');
const files = fs.readdirSync(__dirname+'/build');
function genBuilds() {
	for(const file of files) {	
		mapBuilds.set(file, file);
	}
}