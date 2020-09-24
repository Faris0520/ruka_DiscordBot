const Discord = require('discord.js');
const settings = require('../token.json');
const { platform, arch, cpus } = require('os')
const now = require('performance-now')
var prefix = settings.prefix;
const dateFormat = require('dateformat')
dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');
exports.run = async (client, message, args, msg, bot) => {
  
const model = cpus()[0].model + " " + arch()
     let end = now();
   let milliseconds = parseInt((client.uptime % 1000) / 100),
    seconds = parseInt((client.uptime / 1000) % 60),
    minutes = parseInt((client.uptime / (1000 * 60)) % 60),
    hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
   hours = (hours < 10) ? "0" + hours : hours;
   minutes = (minutes < 10) ? "0" + minutes : minutes;
   seconds = (seconds < 10) ? "0" + seconds : seconds;
   let uptime = "" + hours + " Jam, " + minutes + " Menit dan " + seconds + "." + milliseconds + " Detik";
var embeed = new Discord.RichEmbed()
  .setColor('GOLD')
  .setAuthor(`${client.user.username} Stats`, client.user.avatarURL)
  .addField("Uptime",`${uptime}`)
  .addField("Members:",`${client.users.size.toLocaleString()}`)
  .addField("Servers:",`${client.guilds.size}`)
  .addField("Channels:",`${client.channels.size.toLocaleString()}`)
.addField('Tanggal dibuat:', `${dateFormat(client.createdAt)}`)
 .addField('🔍 System', `
 CPU : ${model}
 Platform : ${platform()}
 `)
  .addField("Memory Usage:",`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
  .setFooter(`${client.user.username} Stats`)
  .setTimestamp()
message.channel.send(embeed);
 }


exports.conf = {
   aliases: ['stats','s'], 
   cooldown: '' 
}

exports.help = {
  name: 'stats',
  description: 'link',
  usage: 'link'
};