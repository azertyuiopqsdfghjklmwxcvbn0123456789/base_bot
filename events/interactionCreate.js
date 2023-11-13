module.exports = {
    name: "interactionCreate",
    async execute(client, interaction) {
        if (!interaction.guild) return;

        if (interaction.isCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;

            // vérification des permissions
            if (command.permissions) {
                if (command.guildOwnerOnly && command.botOwnerOnly) {
                    if (interaction.member.guild.ownerId != interaction.user.id && !client.config.owners.includes(interaction.user.id) || !client.config.owners.includes(interaction.user.id)) return interaction.reply({
                        content: `❌ **Vous devez être le propriétaire __du serveur___ et/ou __du bot__ pour exécuter cette commande.**`,
                        ephemeral: true
                    });
                    else {
                        command.executeSlash(client, interaction);
                        console.log(`[CMD-S]  ${interaction.guild.name} | ${interaction.channel.name} | ${interaction.user.tag} | ${command.name}`);
                        return
                    }
                };
                if (command.botOwnerOnly) {
                    if (!client.config.owners.includes(interaction.user.id)) return interaction.reply({
                        content: `❌ **Vous devez être le propriétaire du bot pour exécuter cette commande.**`,
                        ephemeral: true
                    });
                };

                if (command.guildOwnerOnly) {
                    if (interaction.member.guild.ownerId != interaction.user.id && !client.config.owners.includes(interaction.user.id)) return interaction.reply({
                        content: `❌ **Vous devez être le propriétaire du serveur pour exécuter cette commande.**`,
                        ephemeral: true
                    });
                };

                const authorPerms = interaction.guild.channels.cache.get(interaction.channelId).permissionsFor(interaction.user);
                if ((!authorPerms || !authorPerms.has(command.permissions)) && !client.config.owners.includes(interaction.user.id)) return interaction.reply({
                    content: `❌ **Vous n'avez pas les permissions nécessaires pour exécuter cette commande.**`,
                    ephemeral: true
                });
            };

            command.executeSlash(client, interaction);
            console.log(`[CMD-S]  ${interaction.guild.name} | ${interaction.channel.name} | ${interaction.user.tag} | ${command.name}`);
        };
    }
}