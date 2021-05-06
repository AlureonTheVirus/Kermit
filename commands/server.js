module.exports = {
	name: 'server',
	description: 'gives server info',
	
	export(message) {
               message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};
