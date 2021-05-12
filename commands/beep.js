module.exports = {
	name: 'beep',
	guildOnly: false,	
	description: 'boop.',
	execute(message, args) {
                message.channel.send('boop.')
	},
};
