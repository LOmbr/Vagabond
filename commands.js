const index = require("./command/index");
const wiki = require("./command/wiki");
const dl = require("./command/download");
const classe = require("./command/classe");
const emojis = require("./command/emojis");
const evolve = require("./command/evolve");
const alls = require("./command/all");
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
	if (msg.content === '!v download') {
		msg.channel.send(dl.download());
	}
	if (msg.content === '!v wiki') {
		msg.channel.send(wiki.wiki());
	}
	if (msg.content.startsWith('!v classe') && msg.content !== '!v classes') {
		modif = msg.content.replace('!v classe', '');
		args = modif.split(' ').slice(1);
		msg.channel.send(classe.classe(args, msg.member.roles));
	}
	if (msg.content === '!v emojis') {
		msg.channel.send(emojis.emojis(msg));
	}
	if (msg.content === '!v evolve') {
		msg.channel.send(evolve.evolve());
	}
	if (msg.content.startsWith('!v all')) {
		modif = msg.content.replace('!v all', '');
		args = modif.split(' ').slice(1);
		msg.channel.send(alls.alls(mapUser, args));
	}
	if (msg.content === '!v say') {
		msg.channel.send(say.say());
	}
	if (msg.content === '!v images') {
		msg.channel.send("", {file: imag.imag()});
	}
	if (msg.content.indexOf(':ersil:') > -1) {
		msg.channel.send(ersil.ersil());
	}
	if (msg.content === '!v github') {
		msg.channel.send(github.github());
	}

}