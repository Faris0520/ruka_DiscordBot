const Discord = require('discord.js');

exports.run = async (client, message, args) => { 
    
  const sayMessage = args.join(" ");
    message.delete();
   
    message.channel.send(sayMessage)
  };

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [ '.', 'say' ],
    permLevel: "User"
  };

  exports.help = {
    name: ".",
    category: "Miscelaneous",
    description: "say command",
    usage: "say"
  };
