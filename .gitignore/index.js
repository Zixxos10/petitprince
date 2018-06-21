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
    if (message.content === '^loop') {
        var interval = setInterval(function () {
            return message.channel.send('Il serait temps de penser à te coucher @Zixxos =)')
        }, 1 * 1000);
    }
})



bot.login('NDU5MjgzMTMyMjI3NzgwNjEw.Dg0CkA.5r-z-MnRdU-5X1nf_Zij1jO9G7k')
