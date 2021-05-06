module.exports = {
	name: 'user-info',
	description: 'dysplays username and Discord id of user',
	cooldowns: '1',
	guildOnly: false,
	permissions: '',
  usage: '',
	args: true,
	execute(message, args) {
		message.reply(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};
