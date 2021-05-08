module.exports = {
        name: 'donate',
        description: 'displays donate text',
        execute(message, args) {
           const embed = {
                "title": "--Donate--",
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
                     "name": "Hey! Kermit takes lots of time and work to make, and he isn't cheap, buy me a coffee to help keep Kermit running and get access to the Kermit beta as well as Kermit 's private Discord Server!",
                     "value": "Buy me a coffee: (link coming soon!)"
                  },
                  {
                    "name": "Kermit's Official Discord:",
                     "value": "https://discord.gg/YzFtY74t",
                     "inline": true
                   }
                  ]
                };
                channel.send({ embed });
        },
};
