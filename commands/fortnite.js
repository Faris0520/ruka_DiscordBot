const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fortnite = require("simple-fortnite-api"), client = new fortnite("d3fb1376-33b6-44e2-9821-dbaeee2d3a65");

exports.run = async (bot, message, args) => {
        if(!args[0]) return message.channel.send("Please supply a username.");
        if(args[1] && !["lifetime", "solo", "duo", "squad"].includes(args[1])) return message.channel.send("Usage: `!fortnite <username> <gametype>`\nGameTypes: Lifetime, Solo, Duo, Squad");
        let gametype = args[1] ? args[1].toLowerCase() : "lifetime";

        let data = await client.find(args[0])
        if(data && data.code === 404) return message.channel.send("Unable to find a user with that username.")
            const { image, url, username } = data;
            const { scorePerMin, winPercent, kills, score, wins, kd, matches } = data[gametype]

                const embed = new RichEmbed()
                    .setColor('BLUE')
                    .setAuthor(`Epic Games (Fortnite) | ${username}`, image)
                    .setThumbnail(image)
                    .setDescription(stripIndents`**Gamemode:** ${gametype.slice(0, 1).toUpperCase() + gametype.slice(1)}
                    **Kills:** ${kills || 0}
                    **Score:** ${score || 0}
                    **Score Per Min:** ${scorePerMin || 0}
                    **Wins:** ${wins || 0}
                    **Win Ratio:** ${winPercent || "0%"}
                    **Kill/Death Ratio:** ${kd || 0}
                    **Matches Played:** ${matches || 0}
                    **Link:** [link to profile](${url})`)
                    .setTimestamp()

                    message.channel.send(embed)
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++\nCommand Fortnite (${args[1]}) digunakan oleh ${message.author.username} di ${message.guild.name}\n++++++++++++++++++++++++++++++++++++++++++++++++`)

    }
exports.conf = {
   aliases: ['fortnite'], 
   cooldown: '' 
}

exports.help = {
  name: 'fortnite',
  description: 'link',
  usage: 'fortnite (@mentions)'
};