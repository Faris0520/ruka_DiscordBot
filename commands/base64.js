const Discord = require('discord.js');
const base64 = require("js-base64").Base64;

module.exports.run = async (client, message, args) => {
  if(args[0] === 'encode') {
    if(!args[0]) return message.channel.send("Pls provide text!");
    let txt = args.join(' ').slice(7);
    let txtEncode = base64.encode(txt);
    message.channel.send(`\`${txtEncode}\` `);
    var embedu = new Discord.RichEmbed()
    .setTitle(`Base64 Encode`)
    .setColor('BLUE')
    .setDescription(`Text   : ${txt} \n\nEncode : ${txtEncode}`)
    message.channel.send(embedu);
    return;
  }
  
  if(args[0] === 'decode') {
    if(!args[0]) return message.channel.send("Pls provide code!");
    let txt = args.join(' ').slice(7);
    let txtDecode = base64.decode(txt);
    message.channel.send(`\`${txtDecode}\` `);
    var embed = new Discord.RichEmbed()
    .setTitle(`Base64 Encode`)
    .setColor('BLUE')
    .setDescription(`Code   : ${txt} \n\nDecode : ${txtDecode}`)
    message.channel.send(embed);
    return;
  }
  
  let emvbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor('BASE64')
  .addField('Base64 Commands', '``base64 encode [text]``, ``base64 decode [text]``');
  
  message.channel.send(emvbed);
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++\nCommand base64 digunakan oleh ${message.author.username} di ${message.guild.name}\n++++++++++++++++++++++++++++++++++++++++++++++++`)

}
exports.conf = {
  aliases: ['base64']
}
exports.help = {
  name: 'base64',
  usage: "base64 <text>"
}