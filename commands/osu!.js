const Discord = require("discord.js"); //Discord.js
const osu = require('node-osu'); //node-osu

//Osu Api
var osuApi = new osu.Api(process.env.osutoken, {
    baseUrl: "https://osu.ppy.sh/api",
    notFoundAsError: true,
    completeScores: false
});

module.exports.run = async (bot, message, args) => {
	if (!args[0]) return message.channel.send('`.osu <username>`')
	osuApi.getUser({u: args}).then(user => {
		var embed = new Discord.RichEmbed() 
    .setColor('BLUE')
    .setURL(`https://osu.ppy.sh/u/${user.id}`)
			.setAuthor(`osu! Standard Profile for ${user.name}`, `https://cdn.discordapp.com/emojis/747404848076685370.png`) //Название embed
			.setThumbnail(`https://a.ppy.sh/${user.id}`)
    .setDescription(`**~ Official Rank:** #${user.pp.rank} (${user.country}#${user.pp.countryRank}) \n**~ Level: ${user.level}**\n**~ Total PP:** ${user.pp.raw}\n**~ Hit Accuracy:** ${user.accuracyFormatted}\n**~ Playcount:** ${user.counts.plays}`)
			.setFooter(`On osu! Official server`,`https://images-ext-1.discordapp.net/external/aI5RLiuqTybiTS-g-5UbqG0OqRQUta_Y5h1IRGT2DHY/https/i.imgur.com/sOtDO3u.png`); //Футёр
		message.channel.send({embed: embed}); //Отправка embed
    
	})
  .catch((error) => {
    message.channel.send(`User tidak ditemukan!`)
					console.log(error);
				});
  
};
exports.conf = {
  aliases: ['osu']
}
exports.help = {
  name: 'osuprofile',
  usage: 'osu [user]'
}