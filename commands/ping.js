module.exports = {
	name: 'ping',
	description: 'Pings Bot, then replies with latency -- for debuging',
	execute(message, args, client) {
		message.channel.send(`🏓 Pung! Dur letency es ${Date.now() - message.createdTimestamp}ms. Dur API letency es ${Math.round(client.ws.ping)}ms. *Translation: Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API latency is ${Math.round(client.ws.ping)}ms.*`);
	},
};
