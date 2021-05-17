const Discord = require("discord.js");
const ytdl = require('ytdl-core');
const fs = require('fs');
const ffmpeg = require("ffmpeg");
const avconv = require("avconv");
const OpusEncoder = require("@discordjs/opus");
const twss = require("twss");
const config = require("../config.json");
const stuff = require("./stuff.json")
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const client = new Discord.Client();
client.commands = new Discord.Collection();
const prefix = "$";
var vusers = 0;
var singdelay = /*5*60000*/ 600;
var twssbool = "0";
const blocked_ids = ['', ''];
const dev_ids = [''];
const queue = new.Map();

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

// run whenever a message is sent. . .
client.on('message', async message => {
            console.log(`[${message.author.username}] ${message.content}`);
    
            var allowedToUse = true;
            blocked_ids.forEach(id => {
                if (message.author.id == id)
                    allowedToUse = true;
            });
            if !(allowedToUse) return;
            
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
                            return message.reply('You dont have sufficiant premissions to execute this command!');
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


                    if (!client.commands.has(command)) {
                        message.reply("unknown command >${prefix}${command}<, Make sure you typed everything correctly and that this command exists. If this seems to be a bug you can report it in the K>
                            return console.error(error);
                        }
                        try {
                           client.commands.get(command).execute(message, args, client, twssbool, serverQueue);
                        } catch (error) {
                            console.error(error);
                            message.reply(`there was an error trying to execute that command! (>${prefix}${command}<)`);
                        }
                    });


                client.login(config.BOT_TOKEN);
