module.exports = {
        name: 'coinflip',
        description: 'kermit flips a coin',
        execute(message, args) {
            const messages = [

                " Heads!",

                " Tails!",

            ];

            const randomMessage = messages[Math.floor(Math.random() * messages.length)];

            message.reply("it's" + randomMessage);
        },
};
