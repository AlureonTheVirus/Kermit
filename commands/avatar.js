module.exports = {
    name: 'avatar',
    description: "dysplays @mentioned user's avatar, if not user is specified, dysplays the avatar of the user who executed the command",
    cooldown: 1,
    guildOnly: false,
    permissions: '',
    usage: '',
    args: true,
    execute(message, args) {
        if (args[0]) {
            // Change `getUserFromMention` to `getUserFromMentionRegEx` to try the RegEx variant.
            const user = getUserFromMention(args[0]);

            if (!user) {
                return message.reply("Please use a proper mention if you want to see someone else's avatar.");
            }

            return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL}`);
        }

        return message.channel.send(`${message.author.username}, your avatar: ${message.author.displayAvatarURL}`);
    },

};
