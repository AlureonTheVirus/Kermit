module.exports = {
	name: 'server',
	description: 'gives server info',
	cooldown: 2,
	guildOnly: true,
	export(message) {
               message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	       
	},
};
