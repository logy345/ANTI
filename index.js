const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
const config = require("./config.json");
client.on("ready", () => {
  console.log("I am ready!");
});
 
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.on("message", (message) => {
 if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) 
 {
  message.delete();
 message.channel.send("DONT YOU DO THAT NOW!!")
 .then(msg => {
    msg.delete(1000)
  })
 }
});

client.login(config.token);
 