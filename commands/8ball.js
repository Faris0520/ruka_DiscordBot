const discord = require("discord.js")

module.exports.run = async (client, message, args) => {
let replies = ["Yeah" , "yes" , "No" , "maybe", "Coba tanya seseorang" , "i don't know", "Kamu siapa?", "nop"]

let question = args.slice(0).join(" ")
const embed1 = new discord.RichEmbed()
.setColor("RED")
.setDescription("Kamu harus memberi pertanyaan agar saya bisa menjawabnya.")
if(!question)return message.channel.send(embed1)
  
  let result = Math.floor((Math.random() * replies.length));

let embed = new discord.RichEmbed()
.setColor("#00FFFF")
.addField("Pertanyaan :" , `${question}`)
.addField("Jawabanku :" , `${replies[result]}`)
message.channel.send(embed)
  console.log(`++++++++++++++++++++++++++++++++++++++++++++++++\nCommand 8ball digunakan oleh ${message.author.username} di ${message.guild.name}\n++++++++++++++++++++++++++++++++++++++++++++++++`)
}

module.exports.help = {
name: "8ball",
  aliases: ["eightball"],
  description: "Answer me a question and I will answer it",
  usage: "<question>",
  category: "Misc"
}
exports.conf = {
   aliases: ['8ball'], 
   cooldown: '' 
}