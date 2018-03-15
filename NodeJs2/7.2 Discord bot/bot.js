const Discord = require('discord.js');
const client = new Discord.Client();

const botsettings = require("./botsettings.json")
 

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

    // try {
    //     let link = await client.generateInvite(["ADMINISTRATOR"]);
    //     console.log("This is the link: ", link);
    // } catch(err) {
    //     console.log(err);
    // }

});

client.on('message', msg => {
    if (msg.author.bot) {
        return;
    }


    if (msg.content === 'ping') {
        msg.reply('pong');
    }

    let words = msg.content.split(" ");

    if (words.indexOf("bot") >= 0 && words.indexOf("talk") >= 0) {
        msg.react("👌");
        msg.reply("I'm just a silly bot. \:tired_face:");
    }

});
 
client.login(botsettings.token);