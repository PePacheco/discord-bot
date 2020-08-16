const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logado com o bot ${client.user.tag}`);
});

client.on("message", (msg) => {
    
    try{
        if(msg.author.bot) {return}
        if(msg.channel.id != "738114275016704090") {return}

        let message = msg.content.toLowerCase();

        if(message === "!work_start") {

            msg.channel.send(`O usuário ${msg.author.username} começou a trabalhar.`);
            msg.member.setNickname(msg.author.username + " 🚀");
            
        } else if(message === "!work_end") {

            msg.channel.send(`O usuário ${msg.author.username} finalizou a sua jornada.`);
            msg.member.setNickname(msg.author.username + "  ❌");

        } else if (message === "!work_pause") {

            msg.channel.send(`O usuário ${msg.author.username} deu uma pausa.`); 
            msg.member.setNickname(msg.author.username + " 🕑");

        }  else if (message === "!work_restart") {

            msg.channel.send(`O usuário ${msg.author.username} retornou.`); 
            msg.member.setNickname(msg.author.username + " 🚀");

        } else if (message === '!help') {
            console.log('entrei');

    msg.channel.send(`
    Para iniciar a sua jornada, digite: !work_start
    Para finalizar a mesma, digite: !work_end
    Para intervalos, digite: !work_pause,
    Para sair do intervalo, digite: !work_restart`);
        } else {
            return;
        }

    } catch(err){
        console.log(err);
    }
});

client.login("NzM4MDkzMDYzMDc0ODczMzY0.XyG4uw.XP8l5iwPRU_buVEPmsP8DMCoie0");