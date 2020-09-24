const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("superagent");
exports.run = async (client, message, args) => {
  

      const { body } = await superagent
      .get('http://shibe.online/api/shibes');
      const link = body[0]
      const embed  = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(`Here is your shiba`,`https://cdn.discordapp.com/emojis/598523417662193664.gif`)
      .setImage(link)
message.channel.send({embed})
}
exports.conf = {
   aliases: ['shiba'], 
   cooldown: '' 
}

exports.help = {
  name: 'shiba',
  description: 'ping',
  usage: 'shiba'
};