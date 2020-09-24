const Discord = require('discord.js');
const fetchquote = require('snekfetch');
exports.run = async (client, message, msg, args) => {
fetchquote.get('http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en').then(quote => {
            if (quote.body.quoteText === undefined) {
                return message.reply('Something is messing up the API try again please!');
            }

            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'Kata-kata bijak ',
                  icon_url: 'https://cdn.discordapp.com/emojis/605006621596319775.gif'
                },
                fields: [{
                    name: "Seseorang Mengatakan... :",
                    value: `"_${quote.body.quoteText}_"\n\n**Penulis:** ${quote.body.quoteAuthor}\n\n**Sumber:** ${quote.body.quoteLink}`
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "© Noob"
                }
            }
        })
        });}

exports.conf = {
   aliases: ['quote','q'], 
   cooldown: '' 
}

exports.help = {
  name: 'quote',
  description: 'ping',
  usage: 'quote'
};