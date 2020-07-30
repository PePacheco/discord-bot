const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Logado com o bot ${client.user.tag}`);
});

client.on("message", (msg) => {
    try{
        if(msg.author.bot) return

        if(msg.content === "!work_start") {

            msg.channel.send(`O usuário ${msg.author.username} começou a trabalhar.`);
            msg.member.setNickname(msg.author.username + " [ Trabalhando ]");
            
        } else if(msg.content === "!work_end") {

            msg.channel.send(`O usuário ${msg.author.username} encerrou sua jornada.`);
            msg.member.setNickname(msg.author.username);

        } else if (msg.content === "!work_pause") {

            msg.channel.send(`O usuário ${msg.author.username} deu uma pausa.`);
            msg.member.setNickname(msg.author.username + " [ Em Pausa 👍]");

        } else if (msg.content === "!work_unpause") {

            msg.channel.send(`O usuário ${msg.author.username} saiu da pausa.`);
            msg.member.setNickname(msg.author.username + " [ Trabalhando ]");

        } else if (msg.content.startsWith('!help')) {

    msg.channel.send(`Para iniciar a sua jornada, digite: !work_start
    Para finalizar a mesma, digite: !work_end
    Para intervalos, digite: !work_pause
    Para sair do intervalo, digite: !work_unpause`);

        }
    } catch(err){
        console.log(err);
    }
    
});

client.login("NzM4MDkzMDYzMDc0ODczMzY0.XyG4uw.VyfviO4RQtfMDcXlkqvZgmAELvo");