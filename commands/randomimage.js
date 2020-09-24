const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("superagent");
exports.run = async (client, message, args) => {
     const { body } = await superagent
      .get('https://api.unsplash.com/photos/random/?client_id=Qmb9rVSNnmGqM_9c8YkJM6mtLjs3AzBn0dotq7-H4RE');
    var text = args;
        if (args.length < 1 ) { 
      const embed  = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setImage(body.urls.regular)
      .setFooter('Unsplash Image')
message.channel.send({embed})
}}
exports.conf = {
   aliases: ['random'], 
   cooldown: '' 
}

exports.help = {
  name: 'random',
  description: 'ping',
  usage: 'random'
};