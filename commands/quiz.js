const quiz = require('../json/quiz.json');
const item = quiz[Math.floor(Math.random() * quiz.length)];
const d = require('discord.js')
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
exports.run = async (client, message, msg, args) => {
  const auth = message.author.id;
  //-------
  var izin = new d.RichEmbed()
  .setAuthor(`QUIZ`, `https://cdn.discordapp.com/emojis/361331590334251018.png`)
  .setThumbnail(message.author.displayAvatarURL)
  .addField(`ERROR :`, `<@${message.author.id}> , _**Command ini belum dibuka untuk umum.**_\n\nKalo mau coba command ini, beritahu <@695817459206324265> OK!\n__________________`)
  .setFooter(`Developers only!`)
  .setColor(`RED`)
  if (auth !== "69581745920632426") return message.channel.send(izin);
  let embed = new d.RichEmbed()
  .setAuthor(`QUIZ`, `https://cdn.discordapp.com/emojis/361331590334251018.png`)
  .setThumbnail(message.author.displayAvatarURL)
  .addField(`Category:`, item.category)
  .addField(`Pertanyaan:`, `${item.question}`)
  .addField(`_`, `\`\`\`${item.pil1}\n${item.pil2}\n${item.pil3}\n${item.pil4}\`\`\` `, true)
  .setFooter(`Cara menjawab : Tulis A / B / C / D`)
  .setColor(`BLUE`)
message.channel.send(embed).then(() => {
	message.channel.awaitMessages(filter, { maxMatches: 1, time: 40000, errors: ['time'] })
		.then(collected => {
    var benar = new d.RichEmbed()
  .setAuthor(`QUIZ`, `https://cdn.discordapp.com/emojis/361331590334251018.png`)
  .setThumbnail(message.author.displayAvatarURL)
  .addField(`Category:`, item.category)
  .addField(`Pertanyaan:`, `${item.question}`)
  .addField(`Jawaban:`, `\`\`\`${item.jwb}\`\`\` \n**${collected.first().author} berhasil menjawab dengan benar...**`)
  .setColor(`BLUE`)
			message.channel.send(benar);
		})
		.catch(collected => {
    var salah = new d.RichEmbed()
  .setAuthor(`QUIZ`, `https://cdn.discordapp.com/emojis/361331590334251018.png`)
    .setDescription(`**Waktu Habis!!! Kelihatannya tidak ada yang bisa menjawab dengan benar...**`)
  .setColor(`BLUE`)
			message.channel.send(salah);
		});
  console.log(`Rebooting.... Please Wait...`);
    process.exit(0);
})};
exports.conf = {
  aliases: ['quiz']
}
exports.help = {
  name: 'quis'
}