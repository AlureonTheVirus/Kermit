module.exports = {
	name: 'ping',
	description: 'Pings Bot, then replies with latency -- for debuging',
	cooldowns: '3';
	execute(message, args) {
		message.channel.send(`🏓 Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
	},
};
