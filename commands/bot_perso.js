const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "bot_perso",
    description: "Affiche le lien d'un serveur qui crée des bots perso.",
    aliases: [],
    permissions: [PermissionsBitField.Flags.ViewChannel],
    guildOwnerOnly: false,
    botOwnerOnly: false,
    async execute(client, message, args) {
        message.reply(`**Le lien pour rejoindre le serveur qui fait des bot perso est : [ici](https://discord.gg/xxJtx4ZtXK) **`).catch(() => {});
    },
    async executeSlash(client, interaction) {
        interaction.reply(`**Le lien pour rejoindre le serveur qui fait des bot perso est : [ici](https://discord.gg/xxJtx4ZtXK) **`).catch(() => {});
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
    }
}