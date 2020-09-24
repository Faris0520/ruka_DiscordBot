const Discord = require('discord.js');
const settings = require('../token.json');
var creator = settings.creator
var clientid = settings.clientid
exports.run = async (client, message, args) => {
  const u = message.content.split(" ").slice(1).join(" ");
  if (!u){
var embeed = new Discord.RichEmbed()
  .setColor('BLUE')
  .setAuthor(`${client.user.username} Commands List`, message.guild.iconURL)
  .setThumbnail(client.user.avatarURL)
  .setDescription(`**Category Help :** \`.help <category>\` \n `)
  .addField('***>> New Commands***', `\`base64\`  \`rip\`  \`kanokari\`  \`binary\`  \`calculator\` \n\n\n `)
  .addField(':notepad_spiral: Information', ` \`about\`  \`ping\`  \`invite\`  \`stats\` `)
  .addField(':shield: Moderation', ` \`avatar\`  \`server\`  \`corona\`  \`userinfo\`  \`serverinfo\`  \`purge\` `)
  .addField(':game_die: Fun', ` \`gay\`  \`meme\`  \`8ball\`  \`hack\`  \`quote\`  \`say\`  \`tytyd\`  \`urban\` `)
  .addField(`:flag_jp: For Weebs`, ` \`anime\`  \`manga\`  \`waifu\` `)
  .addField(':camera: Image', ` \`dog\`  \`seal\`  \`llama\`  \`qr\`  \`shiba\`  \`random\`  \`pat\`  \`hug\` `)
  .addField(':video_game: Games Info', ` \`fortnite\`  \`osu\``)
  .addField(':underage: NSFW', `  \`lewd\` \n\n\n _**Support Me!**_\n[**Invite this bot!**](https://discord.com/api/oauth2/authorize?client_id=${clientid}&permissions=8&scope=bot)`)
  .setFooter(`Bot From ${creator}`, client.user.avatarURL)
message.channel.send(embeed);
 }
if (args[0] == "moderation"){
  var embedu = new Discord.RichEmbed()
  .setColor('GOLD')
  .setAuthor(`MODERATION Help Section`, `https://cdn.discordapp.com/emojis/336719753840164864.png`)
  .addField('Avatar | `.avatar`', `Menampilkan Avatar/PP`)
  .addField('Server | `.server`', `Servers im join`)
  .addField('Corona | `.corona <negara>`', `Kasus Corona di seluruh dunia `)
  .addField('Userinfo | `.userinfo <@user>`', `Informasi Pengguna`)
  .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
message.channel.send(embedu);
}
  
  if (args[0] == "image"){
    var embedimg = new Discord.RichEmbed()
  .setColor('GOLD')
  .setAuthor(`IMAGE Help Section`, `https://cdn.discordapp.com/emojis/336719753840164864.png`)
  .addField('Dog | `.dog`', `Gambar anjing random `)
  .addField('Seal | `.seal`', `Gambar anjing laut random `)
  .addField('Llama | `.llama`', `Gambar llama random`)
  .addField('QR | .qr', `Converter teks ke QR`)
  .addField('RandomImage | .random', `Gambar random `)
.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
message.channel.send(embedimg);
  }
    if (args[0] == "fun"){
      var embedfun = new Discord.RichEmbed()
  .setColor('GOLD')
  .setAuthor(`FUN Help Section`, `https://cdn.discordapp.com/emojis/336719753840164864.png`)
  .addField('Gay | `.gay`', `Siapa yang Gay? `)
  .addField('Meme | `.meme`', `A Reddit Meme`)
  .addField('8ball | `.8ball <pertanyaan>`', `Beri saya pertanyaan!`)
  .addField('Hack | `.hack <@user>`', `Siapa yang mau kamu hack? `)
  .addField('Quote | `.quote`', `Kata-kata bijak/motivasi `)
  .addField('Say | `.say`', `Say cmd u know OK! `)
  .addField('Tytyd | `.tytyd <@user>`', `Mengukur tytyd seseorang `)
.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
message.channel.send(embedfun);
    }
      if (args[0] == "information"){
 var embeed = new Discord.RichEmbed()
  .setColor('GOLD')
  .setAuthor(`INFORMATION Help Section`, `https://cdn.discordapp.com/emojis/336719753840164864.png`)
  .addField('About | `.about`', `About this bot`)
  .addField('Ping | `.ping`', `Ping this bot`)
  .addField('Linktr | `.linktr`', `Socmed Developers`)
  .addField('Invite | `.invite`', `Invite this bot to your server `)
  .addField('Stats | `.stats`', `Stats this bot`)
.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
message.channel.send(embeed);
    }
    if (args[0] == "weebs"){
      var embedwebs = new Discord.RichEmbed()
  .setColor('GOLD')
  .setAuthor(`WEEBS Help Section`, `https://cdn.discordapp.com/emojis/336719753840164864.png`)
  .addField('Anime | `.anime`', `Mencari Detail Anime `)
  .addField('Manga | `.manga`', `Mencari Detail Manga`)
  .addField('Waifu | `.waifu`', `Random Waifu`)
.setFooter(`Requested by ${message.author.username}`, message.author.avatarURL)
message.channel.send(embedwebs);
    }}
exports.conf = {
   aliases: ['help', 'Help', 'h','H'], 
   cooldown: '' 
}

exports.help = {
  name: 'help',
  description: 'show all command',
  usage: 'help'
};

