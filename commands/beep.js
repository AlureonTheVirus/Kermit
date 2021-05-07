module.exports = {
	name: 'ban',
  cooldown: 2,
	guildOnly: false,
	args: false,	

description: 'boop.',
	execute(message, args) {
                message.channel.send('boop.')

	},
};
