module.exports = {
	name: 'twsstoggle',
	description: 'toggle twss',
	alias: ['twss', 'twssbool'],
	execute(message, args, twssbool) {
                        if (args === "true" || args === "1" || args === "on") {
                            var twssbool = "1";
                        }
                        if (args === "false" || args === "0" || args === "off") {
                            var twssbool = "0";
                        }
	},
};
