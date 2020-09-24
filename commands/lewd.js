const Discord = require('discord.js')
exports.run = async (client, msg, message, args) => {
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

    let LewdNeko = await nekoclient.LewdNeko();	
  //------------------------------------------------------------------------------------------
  	if (!msg.channel.nsfw)
      return msg.channel.send("Don't do that here BAKA .. there are kids around");
	nekoclient.LewdNeko().then((LewdNeko) => {
		let lwdbd = new Discord.RichEmbed()
		.setTitle(lewdnko)
		.setImage(LewdNeko.neko)
	    .setColor(`${msg.member.displayHexColor}`)
		msg.channel.send(lwdbd)
	  });
}
exports.conf = {
  aliases: ['lewd']
}
exports.help = {
  name: 'lewd'
}