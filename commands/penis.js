const DIscord = require('discord.js')

exports.run = async (bot, message, args) => {
   const num = Math.floor(Math.random() * 20); // sampai 20 cm.
   const panjang_kontol = "10" + "=".repeat(num) + "))";

   let user = message.mentions.users.first() || message.author;
   if (user.bot) return message.reply("Robot mana punya tytyd!!");
   let m = await message.channel.send(`Menebak panjang tytyd si ${user.username} ...`);
   setTimeout(() => {
    m.delete();
    message.channel.send(`${num < 12 ? "😆" : "😍"} **Tytyd si ${user.toString()} sepanjang :**\n\`\`\`${panjang_kontol}\`\`\``);
   }, 3000);
 };
exports.conf = {
   aliases: ['tytyd'], 
   cooldown: '' 
}

exports.help = {
  name: 'tytyd',
  description: 'ping',
  usage: 'tytyd (user)'
};