module.exports = {
	name: 'twss',
	description: 'toggle twss',
	execute(message, args, twssbool) {
                        if (args === "true") {
                            var twssbool = "1";
                        }
                        if (args === "false") {
                            var twssbool = "0";
                        }
	},
};
