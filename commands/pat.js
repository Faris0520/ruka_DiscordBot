const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("superagent");
exports.run = async (client, message, args) => {
  let user = message.mentions.users.first()
  let auth = message.author
if (!args[0]) return message.channel.send('Tag Seseorang!')
      const { body } = await superagent
      .get('https://nekos.life/api/v2/img/pat');
  message.channel.send(`:speech_balloon:**${user}** you have been patted by **${auth}**`)
      const embed  = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setImage(body.url)
message.channel.send({embed})
}
exports.conf = {
   aliases: ['pat'], 
   cooldown: '' 
}

exports.help = {
  name: 'pat',
  description: 'ping',
  usage: 'pat'
};