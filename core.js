
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Bot foi iniciado`);
    const exampleEmbed = new Discord.MessageEmbed()
                                    .setColor('#ff9933')
                                    .setAuthor('BOT', 'https://i.imgur.com/qTLWhgb.jpg')
                                    .addField('Lista de comandos', 'Reaja com 🚀 quando for iniciar o trabalho\nReaja com ❌ quando for finalizar o trabalho\nReaja com 🍴 quando for comer algo\nReaja com ⏸ em outros casos\n', true)
                                    .setThumbnail('https://i.imgur.com/qTLWhgb.jpg')
                                    .setTimestamp()

    client.channels.cache.get('738114275016704090').send(exampleEmbed).then((message) => {
        message.react("🚀")
        message.react("❌")
        message.react("🍴")
        message.react("⏸")
    }).catch((e) => { console.log(e); });
});

client.on('messageReactionAdd', (reaction, user) => {

    if(user.bot) return;

    if(reaction.emoji.name === '🚀') {
        client.channels.cache.get('738114275016704090').send(`!changeNickname/${user.id}/${user.username}/🚀`).then(msg => {
            msg.delete({ timeout: 1000 })
        });
    } else if(reaction.emoji.name === '❌') {
        client.channels.cache.get('738114275016704090').send(`!changeNickname/${user.id}/${user.username}/❌`).then(msg => {
            msg.delete({ timeout: 1000 })
        });
    } else if(reaction.emoji.name === '🍴') {
        client.channels.cache.get('738114275016704090').send(`!changeNickname/${user.id}/${user.username}/🍴`).then(msg => {
            msg.delete({ timeout: 1000 })
        });
    } else if(reaction.emoji.name === '⏸') {
        client.channels.cache.get('738114275016704090').send(`!changeNickname/${user.id}/${user.username}/⏸`).then(msg => {
            msg.delete({ timeout: 1000 })
        });
    }
});

client.on("guildCreate", () => {
    console.log(`Bot entrou no servidor: ${guild.name} (id: ${guild.id})`);
});

client.on("guildDelete", () => {
    console.log(`Bot saiu do servidor: ${guild.name} (id: ${guild.id})`);
});

client.on("message", message => {
    const args = message.content.slice('!').trim().split("/")
    const command = args.shift().toLowerCase();

    if (command === "!changenickname") {
        message.guild.members.cache.get(args[0]).setNickname(args[1] + args[2]);
    }
});

client.login("NzM4MDkzMDYzMDc0ODczMzY0.XyG4uw.yHe9Fq2Kn3u9KoWhBQATS-4Q0WA");