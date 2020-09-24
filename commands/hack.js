const discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (client, message, args) => {
  let user = message.mentions.users.first()
let tag = message.mentions.members.first()
let pass = ['qwertyuiop','asdfghjkl','zxcvbnm','ewrq87wqrj','2021xqwfu','qwertyasddf','d23od7n241',`${user.username}20`, `dn82qryd02n7`, `iwru28r2p0`, `${user.username}2006`]
let result = Math.floor((Math.random() * pass.length));

if(!args[0]) return message.channel.send(`Siapa yang mau kamu hack?`)
  var begin = new discord.RichEmbed()
  .setAuthor(`Starting...`, `https://cdn.discordapp.com/emojis/509046140092809216.gif`)
  .setDescription(`Beginning hacking ${user.username}`)
  let msg = await message.channel.send(begin)
  //----------------EMBED EMBED------------------------//
  var t1 = new discord.RichEmbed()
  .setAuthor(`Hacking.`, `https://cdn.discordapp.com/emojis/745506088014577725.gif`)
  .setDescription(`**Searching for ${user.username}'s email...**`);
  var t2 = new discord.RichEmbed()
  .setAuthor(`Hacking..`, `https://cdn.discordapp.com/emojis/745506088014577725.gif`)
  .setDescription(`**Emali found, email is ${user.username}@gmail.com**`);
  var t3 = new discord.RichEmbed()
  .setAuthor(`Hacking...`, `https://cdn.discordapp.com/emojis/745506088014577725.gif`)
  .setDescription(`**Searching for ${user.username}'s password...**`);
  var t4 = new discord.RichEmbed()
  .setAuthor(`Hacking.`, `https://cdn.discordapp.com/emojis/745506088014577725.gif`)
  .setDescription(`**Password found, password is **\`***********\` `)
  var t5 = new discord.RichEmbed()
  .setAuthor(`Hacking..`,`https://cdn.discordapp.com/emojis/745506088014577725.gif`)
  .setDescription(`**Deleting all information about ${user.username}**`)
  var t6 = new discord.RichEmbed()
  .setAuthor(`Finish hacking...`, `https://cdn.discordapp.com/emojis/745506088014577725.gif`)
  .setDescription(`**Finished hacking ${user.username} with the totally real software hack**`)
  var t7 = new discord.RichEmbed()
  .setAuthor(`Hack Results`, `https://cdn.discordapp.com/emojis/563675949355499530.gif`)
  .setDescription(`\`\`\`> Hack Status       = Complete \n> Hack Requested by = ${message.author.username} \n> Hacked            = ${user.username} \n> Password          = ${pass[result]}\`\`\` `)
 //-----------------------MSG.EDIT---------------------------------//
  
  let time1 = "3s"
  setTimeout(function(){
    msg.edit(t1)
  }, ms(time1))
  
  let time2 = "6s"
  setTimeout(function() {
    msg.edit(t2)
  }, ms(time2))
  
  let time3 = "9s"
  setTimeout(function() {
    msg.edit(t3)
  }, ms(time3))
  
  let time4 = "12s"
  setTimeout(function() {
    msg.edit(t4)
  }, ms(time4))

  let time5 = "16s"
  setTimeout(function() {
    msg.edit(t5)
  }, ms(time5))
  
  let time6 = "20s"
  setTimeout(function() {
  msg.edit(t6)
  }, ms(time6))

  let time7 = "23s"
  setTimeout(function() {
  msg.edit(t7)
  }, ms(time7))
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++\nCommand Hack digunakan oleh ${message.author.username} di ${message.guild.name}\n++++++++++++++++++++++++++++++++++++++++++++++++`)

  }
exports.conf = {
   aliases: ['hack'], 
   cooldown: '' 
}

exports.help = {
  name: 'hack',
  description: 'serverid',
  usage: 'hack'
};