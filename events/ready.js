const { SlashCommandBuilder, PermissionsBitField, EmbedBuilder, ActivityType } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        console.log(`[READY]  ${client.user.tag} est prêt ||| ${client.guilds.cache.size.toLocaleString('fr-FR')} serveurs | ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0).toLocaleString('fr-FR')} utilisateurs\n`);
        setInterval(() => {
            let random = Math.floor(Math.random() * status.length);
            client.user.setActivity(status[random]);
        }, 6000);
    }
}

let status = [
    {
        name: '...',
        type: ActivityType.Playing,
        url: 'https://discord.gg/TWFpPhKabF',
    },
    {
        name: '...',
        type: ActivityType.Custom,
    }
]