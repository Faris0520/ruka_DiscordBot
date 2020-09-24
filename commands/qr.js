const discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  var text = args;
        if (args.length < 1 ) { 
           const embed1 = new discord.RichEmbed()
           .setColor("RED")
           .setDescription("Kamu harus menulis text yang ingin di-convert ke QR. [.qr gay]")
            message.channel.send(embed1)
        }

        else {
            var colour_array = ["1211996", "3447003", "13089792", "16711858", "1088163", "16098851", "6150962"]
            var randomNumber = getRandomNumber(0, colour_array.length - 1);
            var randomColour = colour_array[randomNumber];

            var user_text = text.slice(" ").join("%20")

            var qr_generator = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${user_text}`;
          const embed = new discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`QR code for ${args}`)
          .setImage(qr_generator)
          message.channel.send(embed)

        }
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
module.exports.help = {
  name: "qr",
  aliases: ["qrcode"],
  description: "Change a text to a QR code",
  usage: "<text>",
  category: "Fun"
}
exports.conf = {
   aliases: ['qr'], 
   cooldown: '' 
}
