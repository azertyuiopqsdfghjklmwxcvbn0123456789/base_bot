const { SlashCommandBuilder,  PermissionsBitField } = require("discord.js");

module.exports = {
    name: "ban",
    description: "Pour ban un membre.",
    aliases: [],
    permissions: [PermissionsBitField.Flags.Administrator],
    guildOwnerOnly: false,
    botOwnerOnly: false,
    async execute(client, message, args) {return},

    async executeSlash(client, interaction) {
        const reason = interaction.options.getString('reason') ?? 'aucune raison fourni'
        const userToBan = interaction.options.getUser('user');
        if (userToBan) {
            const member = interaction.guild.members.cache.get(userToBan.id);
            if (member) {
                member.ban({ reason: reason })
                    .then(() => {
                        interaction.reply(`**L'utilisateur ${userToBan.tag} a été ban. :tools:**`)
                        console.log(`L'utilisateur ${userToBan.tag} a été ban.`)
                        userToBan.send(`*** :x: vous avez été ban pour ${reason} :x: ***`)
                    })
            }
        }
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
            .addUserOption(option =>
                option.setName('user')
                    .setDescription('Le membre que vous voulez ban')
                    .setRequired(true))
            .addStringOption(option =>
                option
                    .setName('reason')
                    .setDescription('la raison du bannisement')
                    .setRequired(true))
            .setDMPermission(false);
    }
}