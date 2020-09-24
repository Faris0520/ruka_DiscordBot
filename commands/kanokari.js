const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {

    let reddit = [
        "KanojoOkarishimasu"
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];


    randomPuppy(subreddit).then(async url => {
            await message.channel.send({
                files: [{
                    attachment: url,
                    name: 'meme.png'
                }]
            })
    }).catch(err => console.error(err));

};

exports.conf = {
   aliases: ['kanokari'], 
   cooldown: '' 
}

exports.help = {
  name: 'kanokari',
  description: 'send meme picture',
  usage: 'kanokari'
};