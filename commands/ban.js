module.exports = {
	name: 'ban',
	description: 'bans a user',
        cooldown: 2,
	guildOnly: true,
	permissions: 'BAN_MEMBERS',
        usage: '<member> <reason>',
	args: true,
	execute(message, args) {
	    if (args.length < 2) {
			return message.reply('Please mention the user you want to ban and specify a ban reason.');
		}

		const user = getUserFromMention(args[0]);
		if (!user) {
			return message.reply('Please use a proper mention if you want to ban someone.');
		}

		const reason = args.slice(1).join(' ');
		try {
			await message.guild.ban(user, { reason });
		} catch (error) {
			return message.channel.send(`Failed to ban **${user.tag}**: ${error}`);
		}

		return message.channel.send(`Successfully banned **${user.tag}** from the server!`);
	},
};
