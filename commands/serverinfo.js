const Discord = require('discord.js')

module.exports.run = async (bot, message, msg, args) => {
    let sEmbed = new Discord.RichEmbed()
    .setColor('BLUE')
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Guild Name:**", `${message.guild.name}`, true)
    .addField("**Guild Owner:**", `${message.guild.owner}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .setFooter(`Requested by ${msg.author.username}`, bot.user.displayAvatarURL);
    message.channel.send({embed: sEmbed});
}

exports.conf = {
   aliases: ['serverinfo','server-info','s-info'], 
   cooldown: '' 
}

exports.help = {
  name: 'serverinfo',
  description: 'link',
  usage: 'serverinfo'
};