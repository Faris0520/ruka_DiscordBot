const Discord = module.require("discord.js");

module.exports.run = (client, message) => {
  var owner = "631853272944345098"
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Dont mention that user u gay')
        if(user.id === owner){
          return message.reply("<@!631853272944345098> are 0% gay :rainbow_flag:");
  }else{
          message.reply('<@' + user.id + "> are " + Math.floor(Math.random() * 100 + 1) + "% gay :rainbow_flag:")
  }
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++\nCommand Gay digunakan oleh ${message.author.username} di ${message.guild.name}\n++++++++++++++++++++++++++++++++++++++++++++++++`)

};

exports.conf = {
   aliases: ['gay'], 
   cooldown: '' 
}

exports.help = {
  name: 'gay',
  description: 'gay [mention/id]',
  usage: 'gay [mention]'
};