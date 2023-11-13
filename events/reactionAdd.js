module.exports = {
    name: 'messageReactionAdd',
    async execute(client, reaction) {
        await reaction.message.react(reaction._emoji.name).catch(() => { });
    }
}