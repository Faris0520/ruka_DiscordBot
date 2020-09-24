const Discord = require('discord.js'); //npm i discord.js
const superagent = require('superagent'); 

exports.run = async (client, message, msg, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/waifu"); // where the bot is well searching for
    
    const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .setImage(body.url) // to show random waifu
    .setFooter(`This is ${client.user.username}`); //it's optionel from customisation.json , you can leave it empty
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['random','rdmwaifu','rdm','r'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'waifu',
    description: 'random waifu OwO',
    usage: 'waifu'
  };