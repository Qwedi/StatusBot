const Discord = require('discord.js')
const client = new Discord.Client()
const cfg = require('./cfg.json') // Импорт cfg.json
const pr = cfg.prefix // Префикс из cfg.json

client.on('ready', () => {
client.user.setActivity(`*help | Сервера ${client.guilds.cache.size}`, { type: "LISTENING"});
})


client.login(cfg.token)