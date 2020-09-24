const Discord = require("discord.js");
const ayarlar = require("../token.json")
const axios = require('axios');
var prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
if (!args.length) {
			axios.get('https://corona.lmao.ninja/v2/all')
				.then((response) => {
				const exampleEmbed = new Discord.RichEmbed()
				.setColor("#E3A600")
				.setAuthor(`Worldwide Covid-19 Information`, `https://cdn.discordapp.com/emojis/546983577603145738.gif`)
			    .setDescription(' For information about the country \`${prefix}corona <country>\` ')
            .addField('Number of Positive Cases :', `${response.data.cases}`)
            .addField('Total Deaths :', `${response.data.deaths}`)
			.addField('Total Recovered :', `${response.data.recovered}`)
			.addField('Total Tests :', `${response.data.tests}`)
			.addField('Number of Critical Cases :', `${response.data.critical}`)
			.addField('Today`s Cases :', `${response.data.todayCases}`)
             .setFooter('#StaySafe', `https://cdn.discordapp.com/emojis/696369303498391582.png`)
					message.channel.send(exampleEmbed);
				})
				.catch((error) => {
					console.log(error);
				});
		}
		else {
			axios.get(`https://corona.lmao.ninja/v2/countries/${args[0]}`)
				.then((response) => {
					const exampleEmbed = new Discord.RichEmbed()
						.setColor('#E3A600')
						.setTitle(`${args[0]} - Covid-19 Information`)

						.setDescription(`Country: ${response.data.country}`)      
						.addField(`Number of Positive Cases :`,` ${response.data.cases}`)
                        .addField(`Today's Cases :`, ` ${response.data.todayCases}`)
                        .addField('Total Deaths :',  `${response.data.deaths}`)
						.addField('Today\`s Death Cases :', `${response.data.todayDeaths}`)
						.addField('Total Patient Healed :', `${response.data.recovered}`)
						.addField('Active Case :', `${response.data.active}`)
						.addField('Total Critical Cases :', `${response.data.critical}`)
						.addField('Number of Tests :' ,`${response.data.tests}`)
					.setThumbnail(response.data.countryInfo.flag)
					message.channel.send(exampleEmbed);
				})
				.catch((error) => {
          message.channel.send('Error 404 Not Found')
					console.log(error);
				});
		}
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++\nCommand Corona digunakan oleh ${message.author.username} di ${message.guild.name}\n++++++++++++++++++++++++++++++++++++++++++++++++`)

}
    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["korona", "covid", "covid19", "covıd", "virüs", "coronavirüs"],
  permLevel: 0
};

exports.help = {
  name: 'corona',
  description: 'Ülkelerdeki COVID-19 vakalarını inceyelebilirsiniz',
  usage: 'korona <ülke>'
};