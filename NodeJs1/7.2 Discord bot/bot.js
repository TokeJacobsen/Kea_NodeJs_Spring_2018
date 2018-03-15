const Discord = require('discord.js');
const client = new Discord.Client();
const botsettings = require("./botsettings.json"); 

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

//   try {
//     let link = await client.generateInvite(["ADMINISTRATOR"]);
//     console.log("The invite link: ", link);
//   } catch (err) {
//     console.log(err);
//   }

});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }

    let messageWords = msg.content.split(" ");

    if (messageWords.indexOf("bot") >= 0 && messageWords.indexOf("talk") >= 0) {
        console.log(" got inside ")
        msg.react("👌");
        msg.reply("I'm just a silly bot. \:tired_face:");
    }

});
 
client.login(botsettings.token);