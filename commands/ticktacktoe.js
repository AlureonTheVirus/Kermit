const TicTacToe = require('discord-tictactoe');

module.exports = {
	name: 'ticktacktoe',
	description: 'kermit plays tick tack toe!',
	execute(message, args) {
        new TicTacToe({ language: 'fr', command: '-ttt' })
        .attach(client);
  },
};
