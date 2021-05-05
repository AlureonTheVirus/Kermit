module.exports = {
	name: 'kick',
	description: 'Kicks specified user',
        cooldown: 2,
	alias: ['boot', 'hammer', 'wack'],
	guildOnly: true,
	permissions: 'KICK_MEMBERS',
        usage: '<member>',
	args: true,
	execute(message, args) {

	},
};
