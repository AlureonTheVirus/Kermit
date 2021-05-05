const Discord = require("discord.js");

const ytdl = require('ytdl-core');

const fs = require('fs');

const ffmpeg = require("ffmpeg");

const OpusEncoder = require("@discordjs/opus");

const twss = require("twss");

const config = require("./config.json");

const client = new Discord.Client();

const prefix = "$";

var vusers = 0;

var twssbool = "0";

const blockedUsers = ['id1', 'id2'];

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('[SCRIPT] Kermit can now react to information . . .');
});

// sing rainbow connection ----------------------------------------------------------------
client.on("voiceStateUpdate", (oldState, newState) => {
            client.commands.get('rainbow').execute(vusers, oldState, newState, client);
        }

        // call command files -----------------------------------------------------------------------
        client.on('message', message => {

                // twss --------------------------------------------------------------------------------
                if (!message.content.startsWith(prefix) || message.author.bot) {
                    client.commands.get('twss').execute(message, args);
                }

                // setup command parsing ----------------------------------------------------------------

                if (!message.content.startsWith(prefix) || message.author.bot || blockedUsers.includes(message.author.id)) return;

                const commandBody = message.content.slice(prefix.length);

                const args = message.content.slice(prefix.length).trim().split(/ +/);

                const command = args.shift().toLowerCase();

                // command handler -----------------------------------------------------------------
                if (!client.commands.has(command)) {
                    message.reply('unknown command > ${command} <, Make sure you typed everything correctly and that this command exists. If this seems to be a bug you can report it in the '
                        Kermit Bot ' Discord server. which can be found here: (link coming soon).")
                    }

                    try {
                        client.commands.get(command).execute(message, args);
                    } catch (error) {
                        console.error(error);
                        message.reply('there was an error trying to execute that command! (> ${command} <)');
                    }
                });

            client.login(config.BOT_TOKEN);
