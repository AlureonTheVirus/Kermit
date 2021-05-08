module.exports = {
	name: 'ping',
	description: 'Pings Bot, then replies with latency -- for debuging',
	execute(message, args, client) {
		message.channel.send(`🏓 Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
	},
};
