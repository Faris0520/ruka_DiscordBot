  
const Discord = require('discord.js');
const bot = new Discord.Client();
const json = require(`../token.json`)
var creator = json.creator
var owner = json.owner
module.exports.run = async (bot, message, args, client) => { 
   
  var embed2 = new Discord.RichEmbed()   
      .setTitle('Hai, ' + message.member.user.username)
      .setDescription(`Command ini khusus untuk pengembang. \`\` `)
      .setColor('RED') 
  

  if(message.author.id !== owner) return message.channel.sendEmbed(embed2)
     
  var embed = new Discord.RichEmbed()   
      .setTitle(`**Hai, saya ${client.user.username}!**`)
      .setDescription('Apakah kamu mau meng-reboot saya?')
      .setColor('#1D5385')
      message.channel.send(embed).then(async function (sentEmbed) {
			const emojiArray = ["✅"];
			const filter = (reaction, user) => emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
			await sentEmbed.react(emojiArray[0]).catch(function () { });
			var reactions = sentEmbed.createReactionCollector(filter, {
				time: 30000
			});
reactions.on("end", () => message.delete().then(mr => sentEmbed.delete()).then(m => message.delete()).then(m2 => message.author.send("Proses reboot dibatalkan!"))) 
    reactions.on("collect", async function (reaction) {
				if (reaction.emoji.name === "✅") {
  try {
    message.delete().then(mr => sentEmbed.delete()).then(wb => { 
 console.log(`Rebooting.... Please Wait...`);
    process.exit(0);
    })
  } catch (err) {
  // Pudochu
    message.channel.send(`**Error :** \n\`\`\`js\n${err}\n\`\`\``);
  
};

        }
    })
})

};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reboot', 'Reboot', 'rebot', 'rebooot', 'reboott', 'treboot'],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'Sistemi yeniden başlatır',
  usage: 'reboot'
};