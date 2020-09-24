const dateFormat = require('dateformat');
const Discord = require('discord.js')
dateFormat('dddd, mmmm dS, yyyy, h:MM:ss TT');

exports.run = async (bot, msg) => {
    let user = msg.mentions.users.first() || msg.author;
    let member = msg.guild.member(user);

    if (!member) {
        throw 'That member could not be found!';
    }

    //How long ago the account was created
    const millisCreated = new Date().getTime() - user.createdAt.getTime();
    const daysCreated = millisCreated / 1000 / 60 / 60 / 24;

    //How long about the user joined the server
    const millisJoined = new Date().getTime() - member.joinedAt.getTime();
    const daysJoined = millisJoined / 1000 / 60 / 60 / 24;

    // Slice off the first item (the @everyone)
    let roles = member.roles.array().slice(1).sort((a, b) => a.comparePositionTo(b)).reverse().map(role => role.name);
    if (roles.length < 1) roles = ['None']
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//________________________________ - ui desktop - __________________________________?//

    let embed = new Discord.RichEmbed()
        .setAuthor(`${user.username} UserInfo`)
        .setThumbnail(user.displayAvatarURL)
    .addField('Username', `${user.username}#${user.discriminator}`)
        .addField('Status', `${user.presence.status[0].toUpperCase() + user.presence.status.slice(1)}`)
        .addField('Created On', `${dateFormat(user.createdAt)}`)
        .addField('Days Since Creation', `${daysCreated.toFixed(0)}`)
        .addField('Joined On', `${dateFormat(member.joinedAt)}`)
        .addField('Days Since Joining', `${daysJoined.toFixed(0)}`)
       .addField('Roles',`${roles.join(', ')}`, false)
      .setFooter(`User ID: ${user.id}`, user.displayAvatarURL)
    .setColor('BLUE')
    msg.channel.send(embed)
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//_______________________________________ Presence Info ____________________________________________________//
    if (user.presence.game.type === 0 && user.presence.game.name !== 'Youtube', 'Glitch', 'osu!','Spotify'){
    let presence = new Discord.RichEmbed()
     .setAuthor(`${user.username} Presence Info`, user.avatarURL)
    .setThumbnail(user.presence.game.assets.largeImageURL)
    .addField('App', `${(user.presence.game && user.presence.game && user.presence.game.name) || 'Not playing a game.'}`)
    .addField('Details', `${user.presence.game.details}`)
    .addField('State', `${user.presence.game.state},`)
    .addField('LargeImage Info', `${(user.presence.game.assets.largeText) || 'None'}`)
    .addField('SmallImage Info', `${(user.presence.game.assets.smallText) || 'None'}`)
    .setFooter(`App ID : ${user.presence.game.applicationID}`)
    .setColor('GREEN')
    msg.channel.send(presence);
  }




  }
        
    ;

exports.conf = {
   aliases: ['userinfo','ui'], 
   cooldown: ''
}

exports.help = {
  name: 'userinfo',
  description: 'link',
  usage: 'userinfo (@mention)'
};