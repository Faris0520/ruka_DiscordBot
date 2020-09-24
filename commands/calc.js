const Discord = require("discord.js");
const math = require('mathjs');

module.exports.run = async (bot, message, args, msg) => {
  let user = message.author
    let input = args.join(" ");
    if (!input) {
        const Discord = require('discord.js');
        let calculatorerrorstuff = new Discord.RichEmbed()
        .setAuthor(message.member.displayName, message.author.displayAvatarURL)
        .setColor("#f44242")
        .addField(`<:doggopinged:437533806140981248> \`You must provide a equation to be solved on the calculator!\``, message.author)
        message.channel.send(calculatorerrorstuff).then(msg => {msg.delete(9850)});
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.evaluate(question);
    } catch (err) {
        return message.reply(`:no_entry: \`Invalid math equation:\` \`${err}\``);
    }

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setAuthor(`Calculator`, `https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png`)
        .setColor('RANDOM')
        .setTimestamp()
        .setDescription(`__**Math Calculation**__`)
        .addField(`**Question**`, `**${question}**`, true)
        .addField(`**Answer**`, `**${answer}**`)

    message.channel.send(embed);
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++\nCommand Calculator digunakan oleh ${message.author.username} di ${message.guild.name}\n++++++++++++++++++++++++++++++++++++++++++++++++`)

}

module.exports.help = {
  name: "calculator"
}
exports.conf = {
  aliases: ['calc','calculator']
}