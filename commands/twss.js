module.exports = {
	name: 'twss',
	description: 'auto twss function for text channels', 
                execute(message, args, twssbool,) {
               //twss check (only if twss is on)
                if (twssbool === "1") {
                    twss.threshold = 0.5;
                    if (twss.is(message.content)) {
                        message.reply("THATS WHAT SHE SAID!!");
                    }
                }
},
