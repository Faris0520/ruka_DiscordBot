const RichEmbed = require("discord.js").RichEmbed;
const Discord = require("discord.js");
const boxen = require("boxen")
var ayarlar = require('../token.json')
module.exports.run = (client, message, args) => {
const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.channel.send('You need to input a number between 1 and 99.');
		}
		message.channel.bulkDelete(amount, true)
     ;
}
exports.conf = {
   aliases: ['chatclear','cc','purge'], 
   cooldown: '' 
}

exports.help = {
  name: 'purge',
  description: 'inpit',
  usage: 'inpit'
};