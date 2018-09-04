const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'e'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});











const id = ['454527533279608852'];
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!id.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setplaying')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setwatching')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setliste')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setstrem')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!id.includes(message.author.id)) return;
      
     if (message.content === (prefix + "levebot")) {
    message.guild.leave();        
  } else  

});
  client.on('message', async message => {
            if(!message.channel.guild) return;
             if (message.content.startsWith(prefix + "setstatus")) {
      if (!id.includes(message.author.id)) return;
let args = message.content.split(' ').slice(1).join(' ');
            let sigMessage = await args;
            
            if (sigMessage === "online") {
                client.user.setStatus("online");
                message.channel.send("Your status was set to online.");
            }
            if (sigMessage === "idle") {
                client.user.setStatus("idle");
                message.channel.send("Your status was set to idle.");
            }
            if (sigMessage === "invisible") {
                client.user.setStatus("invisible");
                message.channel.send("Your status was set to invisible.");
            }
            if (sigMessage === "dnd") {
                client.user.setStatus("dnd");
                message.channel.send("Your status was set to dnd.");
            }
            // message.author.send("." + message.content);
        
}
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
     if (!id.includes(message.author.id)) return;
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`

setplaying
setwatching
setliste
setstrem
setname
setavatar
levebot

`);

    }
});



client.login(process.env.BOT_TOKEN);
