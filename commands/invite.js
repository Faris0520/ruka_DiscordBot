const Discord = require('discord.js');
const settings = require('../token.json');

var clientid = settings.clientid;
exports.run = async (client, message, msg, args) => {
var embeed = new Discord.RichEmbed()
  .setColor('GOLD')
  .setAuthor(`This is my OAuth, okok`, `https://cdn.discordapp.com/emojis/619755591463862282.gif`)
  .setDescription(`**[Click me to invite the bot](https://discord.com/api/oauth2/authorize?client_id=${clientid}&permissions=8&scope=bot)**`)
  .setTimestamp()
  .setFooter(`Invite this bot`)
message.channel.send(embeed);
 }


exports.conf = {
   aliases: ['invite','invit','i'], 
   cooldown: '' 
}

exports.help = {
  name: 'invite',
  description: 'inpit',
  usage: 'inpit'
};