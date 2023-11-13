const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "prefix",
    description: "Afficher le prefix du bot.",
    aliases: [],
    permissions: [PermissionsBitField.Flags.ViewChannel],
    guildOwnerOnly: false,
    botOwnerOnly: false,
    async execute(client, message, args) {
        message.reply(`Mon prefix est : ***(le prefix du bot)*** .`).catch(() => {});
    },
    async executeSlash(client, interaction) {
        interaction.reply(`Mon prefix est : ***(le prefix du bot)*** .`).catch(() => {});
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
    }
}