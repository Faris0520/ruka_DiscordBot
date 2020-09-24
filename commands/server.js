const Discord = require('discord.js');
exports.run = async (client, message, args) => {
var embeed = new Discord.RichEmbed()
  .setColor('GOLD')
  .setAuthor(`Servers im join`)
  .setDescription(client.guilds.map(guild => guild.name).join("*, \n\n*"))
  .setTimestamp()
  .setFooter(`Noob bot`)
message.channel.send(embeed);
 }

exports.conf = {
   aliases: ['servers','serv','server'], 
   cooldown: '' 
}

exports.help = {
  name: 'servers',
  description: 'serverid',
  usage: 'serper uy'
};