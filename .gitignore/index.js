const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    bot.user.setAvatar('./pp_avatar.png').catch(console.error)
    bot.user.setUsername('Petit Prince').catch(console.error)
    bot.user.setActivity('surveiller Lolo').catch(console.error)
})

bot.on('message', function (message) {
    if (message.content === '!ping') {
        return message.channel.send('pong')
    }
    if (message.content === '^loopdormir') {
        var active = True;
        var interval = setInterval(function () {
            if (active === True) {
                return message.channel.send('Il serait temps de penser à dormir Lolo =)')
            }
        }, 1 * 2000);
    }
    if (message.content === '^stoploop') {
        var active = False;
})



bot.login(process.env.TOKEN)
