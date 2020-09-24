const Discord = module.require("discord.js");
exports.run = async (client, message, args) => {
  let replies = ["Pong!", "Pang.", "What are you doing?", "Peng.", "U-Uh... h-hi", "W-Was I fast enough?"]
    let result = Math.floor((Math.random() * replies.length));
    let ping = Date.now() - message.createdTimestamp
message.channel.send(`:mega: *${replies[result]}* - My ping: **${Date.now() - message.createdTimestamp}** ms (${ping < 100 ? "Nice! :slight_smile:" : "Standard :confused:"}) *API: ${Math.round(client.ping)} ms*`)
 }

exports.conf = {
   aliases: ['ping'], 
   cooldown: '' 
}

exports.help = {
  name: 'ping',
  description: 'ping',
  usage: 'ping'
};