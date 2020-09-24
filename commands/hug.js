const Discord = require("discord.js");
const ot = new Discord.Client();
exports.run = async (client, message, args) => {
  let member = message.mentions.members.first();
  
      const superagent = require("superagent");
      const { body } = await superagent
      .get('https://nekos.life/api/v2/img/hug');
      const embed  = new Discord.RichEmbed()
      .setAuthor(member.username)
      .setColor('RANDOM')
      .setImage(body.url)
message.channel.send(embed)
}

exports.conf = {
   aliases: ['hug'], 
   cooldown: '' 
}

exports.help = {
  name: 'hug',
  description: 'test',
  usage: 'hug'
};