const index = require("./command/index");
const wiki = require("./command/wiki");
const dl = require("./command/download");
const classe = require("./command/classe");
const evolve = require("./command/evolve");
const say = require("./command/say");
const imag = require("./command/images");
const github = require("./command/github");
const ersil = require("./command/ersil");


exports.commands = function commands(msg, members, mapUser) {
	if (msg.content === '!v help' || msg.content === '!v commands' || msg.content.indexOf(':pororing:') > -1 || msg.content === '!v') {
		s = 'Listes des commandes :\n'
		s += index.index();
		msg.channel.send(s);
	}
	else if (msg.content === '!v download') {
		msg.channel.send(dl.download());
	}
	else if (msg.content === '!v wiki') {
		msg.channel.send(wiki.wiki());
	}
	else if (msg.content.startsWith('!v classe') && msg.content !== '!v classes') {
		modif = msg.content.replace('!v classe', '');
		args = modif.split(' ').slice(1);
		msg.channel.send(classe.classe(args, msg.member.roles));
	}
	else if (msg.content === '!v emojis') {
		msg.channel.send(emojis.emojis(msg));
	}
	else if (msg.content === '!v evolve') {
		msg.channel.send(evolve.evolve());
	}
	else if (msg.content.startsWith('!v all')) {
		modif = msg.content.replace('!v all', '');
		args = modif.split(' ').slice(1);
		msg.channel.send(alls.alls(mapUser, args));
	}
	else if (msg.content === '!v say') {
		msg.channel.send(say.say());
	}
	else if (msg.content === '!v images') {
		msg.channel.send("", {file: imag.imag()});
	}
	else if (msg.content === '!v github') {
		msg.channel.send(github.github());
	}
	if (msg.content.indexOf(':ersil:') > -1) {
		msg.channel.send(ersil.ersil());
	}

}