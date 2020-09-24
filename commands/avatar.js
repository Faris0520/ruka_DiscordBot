const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {
    let target = message.mentions.members.first() || message.guild.members.get(args[0]);
    var sendAvatar = (person) => {
        message.channel.send(new Discord.RichEmbed().setImage(person.displayAvatarURL).setColor(bot.colour).setDescription(`Here's <@${person.id}>'s avatar!`))
    }
    if (!target) {
        if (!message.avatarURL) {
            sendAvatar(message.author)
        }
    }
    else {
        if (!message.avatarURL) {
            sendAvatar(target.user)
        }
        else {
            sendAvatar(target)
        }
    }
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++\nCommand Avatar digunakan oleh ${message.author.username} di ${message.guild.name}\n++++++++++++++++++++++++++++++++++++++++++++++++`)

}

exports.conf = {
   aliases: ['avatar'], 
   cooldown: '' 
}

exports.help = {
  name: 'avatar',
  description: 'show ur pp',
  usage: 'avatar [mention/id]'
};