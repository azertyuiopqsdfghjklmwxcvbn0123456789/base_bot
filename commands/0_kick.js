const { SlashCommandBuilder,  PermissionsBitField } = require("discord.js");

module.exports = {
    name: "kick",
    description: "Pour kick un membre.",
    aliases: [],
    permissions: [PermissionsBitField.Flags.Administrator],
    guildOwnerOnly: false,
    botOwnerOnly: false,
    async execute(client, message, args) {return},

    async executeSlash(client, interaction) {
        const reason = interaction.options.getString('reason') ?? 'aucune raison fourni'
        const userToKick = interaction.options.getUser('user');
        if (userToKick) {
            const member = interaction.guild.members.cache.get(userToKick.id);
            if (member) {
                member.kick({ reason: reason })
                    .then(() => {
                        interaction.reply(`L'utilisateur ${userToKick.tag} a été kick. :tools:`)
                        console.log(`L'utilisateur ${userToKick.tag} a été kick pour ${reason} !`)
                        userToKick.send(`vous avez été kick pour ${reason}`)
                    })
            }
            else {
                interaction.reply(":warning: j'arrive pas a récuperer son ID")
            }
        }
    },
    get data() {
        return new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description)
            .addUserOption(option =>
                option.setName('user')
                    .setDescription('user que vous voulez kick')
                    .setRequired(true)
            )
            .addStringOption(option =>
                option.setName('reason')
                    .setDescription("pour quelle raison vous voulez kick l'user")
                    .setRequired(true),
            )
            .setDMPermission(false);
    }
}