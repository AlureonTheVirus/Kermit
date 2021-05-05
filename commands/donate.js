module.exports = {
        name: 'donate',
        description: 'displays donate text',
        execute(message, args) {
            const donateEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle('"Kermit The Frog Here. . . Donate and Show Your Support!"')
                .setAuthor('Kermit Bot')
                .setDescription("Hey! Kermit takes lots of time and work to make, and he isn't cheap, buy me a coffee to help keep Kermit running and get access to the Kermit beta as well as Kermit 's private Discord Server!")
                .addFields({
                    name: "Kermit's Discord",
                    value: "(Discord Server Coming Soon!)",
                    inline: true,
                }, {
                    name: 'Buy me a coffee:',
                    value: "(link coming soon! in the meantime, just hang out and enjoy Kermit's Many features!)",
                    inline: true,
                }, {
                    name: '\u200B',
                    value: '\u200B'
                }, {
                    name: 'Top Donators:',
                    value: '@spinninlock -- $1 USD'
                }, )
                .setTimestamp()
                .setFooter('Kermit Bot, Made By: Isaac Stanger (@AlureonTheVirus)', 'https://i.imgur.com/jk22m.jpg');
            channel.send(donateEmbed);
        },
