module.exports = {
	name: 'kick',
	description: 'Kicks specified user',
        cooldown: 2,
	alias: ['boot', 'wack'],
	guildOnly: true,
	permissions: 'KICK_MEMBERS',
        usage: '<member>',
	args: true,
	execute(message, args) {
if (msg.member.hasPermission("KICK_MEMBERS")) {
    if (msg.members.mentions.first()) {
        try {
            msg.members.mentions.first().kick();
        } catch {
            msg.reply("I do not have permissions to kick " + msg.members.mentions.first());
        }
    } else {
        msg.reply("You do not have permissions to kick " + msg.members.mentions.first());
    }
}
	},
};
