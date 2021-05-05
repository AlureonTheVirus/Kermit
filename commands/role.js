module.exports = {
	name: 'role',
	description: 'Gives a role to a certain user',
        cooldown: 2,
	alias: ['perms'],
	guildOnly: true,
	permissions: 'MANAGE_ROLES',
        usage: '<member> <roles>',
	args: true,
	execute(message, args) {

	},
};
