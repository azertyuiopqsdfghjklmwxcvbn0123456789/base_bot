const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    name: "bot-fonda__stop",
    description: "Arrete le bot (commande OWNER)",
    aliases: [],
    permissions: [PermissionsBitField.Flags.ViewChannel],
    guildOwnerOnly: false,
    botOwnerOnly: true,
    async execute(client, message, args) {
        message.reply("cette commande ne ce fait que en /")
        return
    },
    async executeSlash(client, interaction) {
        interaction.reply({ content: "le bot a été stopper", ephemeral: true })
        console.log(`le bot a été stopper avec la cmd ${this.name} !`)
            .then(() => {
                process.exit();
            })
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
    }
}