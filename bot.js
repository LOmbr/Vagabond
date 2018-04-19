const Discord = require("discord.js");

const init = require("./command/init");
const commands = require("./commands");
const client = new Discord.Client();

const mapUser = new Map();
const members = client.users;

const prefixe = '!v';

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('!v || !v help || !v commands');	
	init.gen(client, members, mapUser);	
});

client.on('message', msg => {
	
	if(msg.content.startsWith(prefixe) || msg.content.indexOf(':ersil:') > -1) {
		commands.commands(msg, members, mapUser);
	}
		
});

client.login('NDM1NDE4NzI4MDE2OTA0MTkz.DbYq5A.O_I5MSf11tSJ8v_6rjVaEOgU-Kg');

