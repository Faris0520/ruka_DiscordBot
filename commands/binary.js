const Discord = require("discord.js");
const axios = require('axios');
exports.run = async (bot, message, args) => {
  const url = `http://some-random-api.ml/binary?text=${args}`;

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(`An error occured, please try again!`)
        }

        await message.channel.send(`Text to Binary :  \`` + data.binary + `\``)
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++\nCommand Binary digunakan oleh ${message.author.username} di ${message.guild.name}\n++++++++++++++++++++++++++++++++++++++++++++++++`)

    }

exports.help = {
    name: 'binary',
    usage: 'binary <text>',
    description: 'Spaces out text to look all dramatic n\' stuff'
};
exports.conf = {
  aliases: ['binary']
}