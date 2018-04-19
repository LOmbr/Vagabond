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
	crabe = 0;
});

client.on('message', msg => {
	
	if(msg.content.startsWith(prefixe) || msg.content.startsWith(':poroing:') || msg.content.indexOf(':ersil:') > -1) {
		commands.commands(msg, members, mapUser);
	}
});

client.login(process.env.TOKEN);

