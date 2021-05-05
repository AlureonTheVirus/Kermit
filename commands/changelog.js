module.exports = {
	name: 'changelog',
	description: 'displays changelog', 
        execute(message, args) {
              const changelogEmbed = new Discord.MessageEmbed()
                     .setColor('#0099ff')
                     .setTitle('Changelog:')
                     .setAuthor('Kermit Bot')
                     .setDescription("'Kermit is constantly being updated, here's the changelog:' - Isaac Stanger")
                         .addFields({
                         name: "\u200B",
		         value: "5/5/2021 - Bugfixes: $ping command now dysplays properly, repaired $help command for specific command help"
                         value: "5/4/2021 - Official beta release, file system/command handler overhaul"
                         }, )
                         .setTimestamp()
                         .setFooter('Kermit Bot, Made By: Isaac Stanger (AlureonTheVirus)', 'https://i.imgur.com/jk22m.jpg');
		         channel.send(changelogEmbed);
	},
};
