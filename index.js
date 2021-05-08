const Discord = require("discord.js");

const ytdl = require('ytdl-core');

const fs = require('fs');

const ffmpeg = require("ffmpeg");

const avconv = require("avconv");

const OpusEncoder = require("@discordjs/opus");

const twss = require("twss");

const config = require("../config.json");

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const client = new Discord.Client();

client.commands = new Discord.Collection();

const prefix = "$";

var vusers = 0;

var singdelay = /*5*60000*/ 600;

var twssbool = "0";

const blockedUsers = ['', ''];

this.queue = new Map();

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('[SCRIPT] Kermit can now react to information . . .');
    client.user.setPresence({
        activity: {
            name: 'Playing: $ping',
            type: 'STREAMING',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
        },
        status: 'online'
    });
});

client.on("guildCreate", guild => {
    let channelID;
    let channels = guild.channels.cache;

    channelLoop:
        for (let key in channels) {
            let c = channels[key];
            if (c[1].type === "text") {
                channelID = c[0];
                break channelLoop;
            }
        }

    let channel = guild.channels.cache.get(guild.systemChannelID || channelID);
    const embed2 = {
        "title": "''hi ho! Kermit the Frog here!''",
        "description": "Thanks for adding me to the server! my prefix is ''$'' you can use it to get my attention!",
        "url": "",
        "color": 4279444,
        "footer": {
            "icon_url": "https://i.imgur.com/9xnt22b.jpg",
            "text": "Kermit Bot | Designed By: Isaac Stanger (@AlureonTheVirus)"
        },
        "thumbnail": {
            "url": ""
        },
        "image": {
            "url": ""
        },
        "author": {
            "name": "Kermit - Alureon's bot",
            "url": "",
            "icon_url": "https://i.imgur.com/9xnt22b.jpg"
        },
        "fields": [{
                "name": "use $help for a lsit of commands",
                "value": "."
            },
            {
                "name": "Kermit's Official Discord Server:",
                "value": "(link coming soon)",
                "inline": true
            },
            {
                "name": "Github repo:",
                "value": "Kermit is open source! all of his code can be found here: https://github.com/AlureonTheVirus/Kermit",
                "inline": true
            }
        ]
    };
    channel.send({
        embed2
    });
});

// run whenever a message is sent. . .
client.on('message', message => {
    console.log(`[${message.author.username}] -- ${message.content}`);
    // twss --------------------------------------------------------------------------------
    if (!message.content.startsWith(prefix) || message.author.bot) {
        if (twssbool === "1") {
            twss.threshold = 0.5;
            if (twss.is(message.content)) {
                message.reply("THATS WHAT SHE SAID!!");
            }
        }
    }

    // setup command parsing ----------------------------------------------------------------

    if (!message.content.startsWith(prefix) || message.author.bot || blockedUsers.includes(message.author.id)) return;

    const commandBody = message.content.slice(prefix.length);

    const args = message.content.slice(prefix.length).trim().split(/ +/);

    const command = args.shift().toLowerCase();
    

    // command handler -----------------------------------------------------------------
    if (command.permissions) {
        const authorPerms = message.channel.permissionsFor(message.author);
        if (!authorPerms || !authorPerms.has(command.permissions)) {
            return message.reply('You can not do this!');
        }
    }

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    if (command.args && !args.length) {
        let reply = `You didn't provide any arguments, ${message.author}!`;

        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }
/*
    const {
        cooldowns
    } = client;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }
*/
         if (!client.commands.has(command)) {
             message.reply("unknown command > ${command} <, Make sure you typed everything correctly and that this command exists. If this seems to be a bug you can report it in the Kermit Bot  Discord server. which can be found here: (link coming soon).");
         }
         try {
             client.commands.get(command).execute(message, args, client, twssbool);
         } catch (error) {
              console.error(error);
              message.reply('there was an error trying to execute that command! (> ${command} <)');
           }
});

// sing rainbow connection --------------------------------------------------------------------------
client.on("voiceStateUpdate", (oldState, newState) => {
    if (oldState.channel === null && newState.channel !== null) {
        if (oldState.member.user.bot) return;
        console.log("[SCRIPT] a user has joined a VC!");
        vusers = vusers + 1;
        console.log(vusers);
        if (vusers === 1) {
            console.log("[SCRIPT] there is only one user in a VC, kermit preparing to sing for them!");
            setTimeout(() => {
                oldState.member.voice.channel
                    .join()
                    .then((VoiceConnection) => {
                        VoiceConnection.play("RainbowConnection1.mp3").on("finish", () => {
                            console.log("Rainbow connection has stopped");
                            VoiceConnection.disconnect();
                        });
                    })
                    .catch((e) => console.log(e));
            }, singdelay); // ammount of time for Kermit to wait before playing the son
        }
    } else {
        if (oldState.channel !== null && newState.channel === null) {
            if (oldState.member.user.bot) return;
            console.log("A user has left the VC!");
            vusers = vusers - 1;
            console.log(vusers);
            if (vusers === 1) {
                console.log("[SCRIPT] there is only one user in a VC, kermit preparing to sing for them!");
                setTimeout(() => {
                    oldState.member.voice.channel
                        .join()
                        .then((VoiceConnection) => {
                            VoiceConnection.play("RainbowConnection1.mp3").on("finish", () => {
                                VoiceConnection.disconnect();
                            });
                        })
                        .catch((e) => console.log(e));
                }, singdelay); // ammount of time for Kermit to wait before playing the song
            }
        }
    }
// leave channel if nobody is in it
  if (oldState.channelID !==  oldState.guild.me.voice.channelID || newState.channel)
    return;

  // otherwise, check how many people are in the channel now
  if (!oldState.channel.members.size - 1)
    setTimeout(() => { // if 1 (you), wait five minutes
      if (!oldState.channel.members.size - 1) // if there's still 1 member,
         oldState.channel.leave(); // leave
     }, 600); // (5 min in ms)

});

client.login(config.BOT_TOKEN);
