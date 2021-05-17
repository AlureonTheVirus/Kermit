module.exports = {
    name: 'inv',
    description: 'Creates an invite to every server Kermit has been added to.',
    execute(message, args, dev_ids) {
      
        var allowedToUse_dev = false;
        dev_ids.forEach(id => {
            if (message.author.id == id)
                allowedToUse_dev = true;
        });

        if (allowedToUse_dev) {
            let invites = ["ignore me"],
                ct = 0;
            client.guilds.forEach(g => {
                g.fetchInvites().then(guildInvites => {
                    invites[invites.length + 1] = (g + " - `Invites: " + guildInvites.array().join(", ") + "`");
                    ct++;

                    if (ct >= client.guilds.size) {
                        invites.forEach((invite, i) => {
                            if (invite == undefined)
                                invites.splice(i, 1);
                        });

                        invites.shift();
                        invites.forEach((invite, i) => invites[i] = "- " + invite);
                        invites = invites.join("\n\n");

                        let embed = new Discord.RichEmbed()
                            .setTitle("All Invites:")
                            .setDescription(invites);

                        message.channel.send(embed);
                    }
                }).catch(err => {
                    ct++;
                });
            });
        } else {
            message.reply("this command can only be used by a developer.");
        }
    },
};
