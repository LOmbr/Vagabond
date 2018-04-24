const Discord = require("discord.js");

const init = require("./command/init");
const commands = require("./commands");
const client = new Discord.Client();

const mapUser = new Map();
const mapBuilds = new Map();
const members = client.users;

const prefixe = '!v';

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity('!v || !v help || !v commands || :pororing:');	
	init.gen(client, members, mapUser, mapBuilds);	
	crabe = 0;
});

client.on('message', msg => {
	
	if(msg.content.startsWith(prefixe) || msg.content.indexOf(':pororing:') > -1 || msg.content.indexOf(':ersil:') > -1) {
		commands.commands(msg, members, mapUser, mapBuilds);
	}
	else if(msg.content.startsWith('!roles')) {
		
		s = '';
		msg.member.roles.forEach(function(element) {
			s+= element + ' ';
		});
		msg.channel.send(s);
	}
});

client.login(process.env.TOKEN);

