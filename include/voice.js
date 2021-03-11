module.exports = {
    async voiceRole(oldState, newState) {
        //* user
        const user = newState.guild.members.cache.get(newState.id);

        //* check bot
        if (user.user.bot) return;

        //* channels
        const oldChannel = oldState.channelID;
        const newChannel = newState.channelID;

        if (newChannel) {
            if (oldChannel === newChannel) return;

            const channel = newState.guild.channels.cache.get(newChannel);
            const lastChannel = oldState.guild.channels.cache.get(oldChannel);

            //* remove last voice channel role
            if (oldChannel) {
                const lastVoiceRole = newState.guild.roles.cache.find(
                    (roles) => roles.name === lastChannel.name
                );
                user.roles.remove(lastVoiceRole);
            }

            //* add voice channel role
            const voiceRole = newState.guild.roles.cache.find(
                (roles) => roles.name === channel.name
            );
            user.roles.add(voiceRole);

        } else {
            const channel = oldState.guild.channels.cache.get(oldChannel);

            //* remove voice channel role
            const voiceRole = oldState.guild.roles.cache.find(
                (roles) => roles.name === channel.name
            );
            user.roles.remove(voiceRole);
        }
    },
};