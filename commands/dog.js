const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = async (client, message, args) => {
      const superagent = require("superagent");
      const { body } = await superagent
      .get('https://dog.ceo/api/breeds/image/random');
      const embed  = new Discord.RichEmbed()
      .setColor('GRAY')
      .setAuthor('This is Dog', `https://cdn.discordapp.com/emojis/598523417662193664.gif`)
      .setImage(body.message)
message.channel.send({embed})
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++\nCommand Dog digunakan oleh ${message.author.username} di ${message.guild.name}\n++++++++++++++++++++++++++++++++++++++++++++++++`)

}
exports.conf = {
   aliases: ['dog'], 
   cooldown: '' 
}

exports.help = {
  name: 'dog',
  description: 'link',
  usage: 'dog'
};