const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
const uwu = message.content.split(" ").slice(1).join(" ");

var lwdnko = [
"ugu ... so lewd",
"you ... you lewdie!",
"HENTAI! BAKA BAKA BAKA BAKA HEENNNTAAII!!!",
"how could you?",
"ravioli ravioli dun lewd the neko loli",
"if you insist"
];
let lewdnko = lwdnko[Math.floor(Math.random() * lwdnko.length)];

const Neko = require("neko.js");

let nekoclient = new Neko.Client(); // default api key is defaulted :D

    let neko = await nekoclient.neko();	// logs to console the url for Neko picture  

    let why = await nekoclient.why(); // logs to console a funny why joke

    let LewdNeko = await nekoclient.LewdNeko();	// logs to console a LewdNeko image url
	
	let nsfwchan = message.guild.channels.find("name", "nsfw");

	if (!uwu){
    nekoclient.neko().then((neko) => {
		let nkobd = new Discord.RichEmbed()
		.setTitle(nko)
		.setImage(neko.neko)
	    .setColor(`${message.member.displayHexColor}`)
		message.channel.send(nkobd)
		}); 
	}
}
exports.conf = {
  aliases: ['neko']
}
exports.help = {
  name: 'neko',
  usage: 'neko'
}