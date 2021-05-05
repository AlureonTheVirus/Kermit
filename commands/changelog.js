module.exports = {
	name: 'changelog',
	description: 'displays changelog', 
        execute(message, args) {
              const changelogEmbed = new Discord.MessageEmbed()
                    {
    "title": "Changelog",
    
    "color": 8448256,
    "footer": {
      "icon_url": "https://i.imgur.com/9xnt22b.jpg",
      "text": "Kermit Bot | Designed By: Isaac Stanger (@AlureonTheVirus)"
    },
 
    "author": {
      "name": "Kermit - Alureon's Bot",
      "icon_url": "https://i.imgur.com/9xnt22b.jpg"
    },
    "fields": [
      {
        "name": "5/5/2021",
        "value": "- Bugfixes: $ping command now dysplays properly, repaired $help command for specific command help"
      },
      {
        "name": "5/4/2021",
        "value": "- Official beta release, file system/command handler overhaul"
      },
      
      {
        "name": "Known Bugs:",
        "value": "everything is broken, dont remind me. when I get Kermit into a stable version, I'll start updating the buglist.",
        "inline": true
      },
      {
        "name": "Kermit's Official Discord:",
        "value": "(link coming soon)",
        "inline": true
      }
    ]
  }
}
channel.send(changelogEmbed);
	},
};
