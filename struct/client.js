const { Client, Collection } = require('discord.js');

module.exports = class extends Client {

                this.cooldowns = new Collection();

                this.queue = new Map();

                this.config = config;
        },
};

