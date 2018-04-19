const Discord = require("discord.js");

const init = require("./command/init");
const commands = require("./commands");
const client = new Discord.Client();

const mapUser = new Map();
const members = client.users;

const prefixe = '!v';
var crabe;

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('!v || !v help || !v commands');	
	init.gen(client, members, mapUser);	
	crabe = 0;
});

client.on('message', msg => {
	
	if(msg.content.startsWith(prefixe)) {
		commands.commands(msg, members, mapUser, crabe);
	}
	/*else if(msg.content.indexOf(':ersil:') > -1) {
		crabe = commands.commands(msg, members, mapUser, crabe);
	}*/
		
});

client.login('NDM1NDE4NzI4MDE2OTA0MTkz.DbYq5A.O_I5MSf11tSJ8v_6rjVaEOgU-Kg');

