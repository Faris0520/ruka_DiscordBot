const { get } = require('node-superfetch');
const { RichEmbed } = require('discord.js');
const Canvas = require("canvas");
const Discord = module.require("discord.js");

exports.run = async (client, message, args, msg) => {
      const canvas = Canvas.createCanvas(240, 300);
    const ctx = canvas.getContext("2d");
  const user = message.mentions.users.first();
  if (!args[0]) return message.channel.send(`<@${message.author.id}>, mention who!`)
  
  const user2 = user.avatarURL 

   const background = await Canvas.loadImage(`https://cdn.discordapp.com/attachments/730666270139088918/747337667586293810/rip.png`)
   
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

   ctx.strokeStyle = '#000000';
   ctx.strokeRect(0, 0, canvas.width, canvas.height);


   const userpfp = await Canvas.loadImage(user2)
   ctx.drawImage(userpfp, 60,130,120, 120);
  const attachment = new Discord.Attachment(
        canvas.toBuffer(),
        "rip.png"
      );
  message.channel.send(attachment)
}
exports.conf = {
   aliases: ['rip'], 
   cooldown: '' 
}

exports.help = {
  name: 'rip',
  description: 'link',
  usage: 'rip'
};