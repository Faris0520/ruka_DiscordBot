const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./token.json");
const chalk = require("chalk");
const fs = require("fs");
require("./util/eventLoader.js")(client);

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  log(`you have ${files.length} command.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Online : ${props.help.name} ,`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./commands/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

//-----------------------KOMUTLAR-----------------------\\

disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "sepi") {
    msg.channel.send("ya sepi");
  }
});

disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "test") {
    msg.channel.send("test!");
  }
});

disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "Watsap gays...") {
    msg.channel.send("anda gay gay gay gay gay gay!");
  }
});

disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "Hai") {
    msg.channel.send("Hey Hey...");
  }
});

disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "Hmm") {
    msg.channel.send(
      "https://cdn.discordapp.com/attachments/752389545458270329/752389688354013214/unknown.png"
    );
  }
});

disableEveryone: true;
//without embed
{
  let think = require("./json/think.json");
  var image = [
    "https://media.tenor.com/images/3a404fc72bef4f5e78ca5fe52d2b86c4/tenor.gif",
    "https://media.tenor.com/images/2ab5635c3ca5d3c2891666347e44e587/tenor.gif",
    "https://thumbs.gfycat.com/HeavyDistortedBurro-size_restricted.gif",
    "https://media.tenor.com/images/83ab21f684ec5b2325e8f86f6b7d1a85/tenor.gif"
  ];
  var random = Math.floor(Math.random() * image.length);
  client.on("message", msg => {
    if (msg.content === "hmm") {
      msg.channel.send(`${image[random]}`);
    }
  });
}


disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "Mmm") {
    msg.channel.send("hmmmmmmmmmmmmmmm");
  }
});

disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "ya kan") {
    msg.channel.send("ya..");
  }
});

disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "hmclaim") {
    msg.channel.send("hmmm");
  }
});

disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === ".claim") {
    msg.channel.send("hmnm");
  }
});


disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "heh") {
    msg.channel.send("hah");
  }
});

disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "Hmmm") {
    msg.channel.send(
      `https://cdn.discordapp.com/attachments/752389545458270329/752389688354013214/unknown.png`
    );
  }
});

disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "eh") {
    msg.channel.send(`eh.`);
  }
});
disableEveryone: true;
//without embed
client.on("message", msg => {
  if (msg.content === "ok") {
    msg.channel.send("okk");
  }
});

//-------------------
client.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find(x => x.name === "welcome");
  channel.send(`Welcome to the server, ${member}`);
});

client.login(ayarlar.token);
