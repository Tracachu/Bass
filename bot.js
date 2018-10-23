const Discord = require("discord.js");
const Music = require("discord.js-vibes");
 
let bot = new Discord.Client();
 
Music.start(bot, {
    youtubeAPIKey: 'AIzaSyChV72AqgUOWab694WT3zdK6EIbY0EGRuc'
  });

  bot.on("ready", () => {
      console.log("ready");
  });
 

bot.login(proccess.env.bot)
