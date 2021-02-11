const discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    message.delete()

    message.channel.send(
        ":smirk:",
        ":smirk:",
        ":smirk:",
        ":smirk:"
    )
}

module.exports.help = {
    name: 'smirk'
}