const { RichEmbed } = require('discord.js');
const fetch = require('node-fetch')


exports.run = async (bot, message, args) => {
        let msg = await message.channel.send("Generating...")

        fetch("https://apis.duncte123.me/llama")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops. I broke, try again!")

            let embed = new RichEmbed()
            .setColor('CYAN')
            .setAuthor(`Llama for you`, bot.user.displayAvatarURL)
            .setImage(body.data.file)
                msg.edit(embed)
        })
    }
exports.conf = {
   aliases: ['llama'], 
   cooldown: '' 
}

exports.help = {
  name: 'llama',
  description: 'ping',
  usage: 'llama'
};