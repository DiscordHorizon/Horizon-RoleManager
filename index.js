const Discord = require("discord.js");
const { discord, messages } = require("./utils/horizonUtils");
const { voiceRole } = require("./include/voice");

require("./server");

const bot = new Discord.Client({
    partials: ["MESSAGE", "CHANNEL", "REACTION"],
});

bot.on("ready", async () => {
    await bot.user.setPresence({
        activity: {
            name: `Gerenciando cargos do servidor!!`,
            type: 1,
            url: "https://twitch.tv/bravanzin",
        },
    });
    console.log("[Bot] Connected");
});

//* add voice role
bot.on("voiceStateUpdate", (oldState, newState) => {
    voiceRole(oldState, newState);
});

//* reaction add role check
bot.on("messageReactionAdd", async (reaction, user) => {
    const id = reaction.message.id;
    const roles = reaction.message.guild.roles.cache;
    const members = reaction.message.guild.members.cache;

    if (reaction.partial) await reaction.fetch();

    //* "Horizon Member" role
    if (id === messages.rules) {
        const role = roles.find((role) => role.name === "Horizon Member");
        const level = roles.find((roles) => roles.name === "level 1");
        members.get(user.id).roles.add(level);
        members.get(user.id).roles.add(role);
    }
    //* "Tasks Verified" role
    if (id === messages.tasks) {
        const role = roles.find((role) => role.name === "Tasks Verified");
        members.get(user.id).roles.add(role);
    }
    //* "Valorant" role
    if (id === messages.games.valorant) {
        const role = roles.find((role) => role.name === "Valorant");
        members.get(user.id).roles.add(role);
    }
    //* "League of Legends" role
    if (id === messages.games.leagueoflegends) {
        const role = roles.find((role) => role.name === "League of Legends");
        members.get(user.id).roles.add(role);
    }
    //* "Ragnarok" role
    if (id === messages.games.ragnarok) {
        const role = roles.find((role) => role.name === "Ragnarok");
        members.get(user.id).roles.add(role);
    }
});

//* reaction remove role check
bot.on("messageReactionRemove", async (reaction, user) => {
    const id = reaction.message.id;
    const roles = reaction.message.guild.roles.cache;
    const members = reaction.message.guild.members.cache;

    if (reaction.partial) await reaction.fetch();

    //* "Horizon Member" role
    if (reaction.message.id === messages.rules) {
        const role = roles.find((role) => role.name === "Horizon Member");
        const level = roles.find((roles) => roles.name === "level 1");
        members.get(user.id).roles.remove(role);
        members.get(user.id).roles.remove(level);
    }
    //* "Tasks Verified" role
    if (id === messages.tasks) {
        const role = roles.find((role) => role.name === "Tasks Verified");
        members.get(user.id).roles.remove(role);
    }
    //* "Valorant" role
    if (id === messages.games.valorant) {
        const role = roles.find((role) => role.name === "Valorant");
        members.get(user.id).roles.remove(role);
    }
    //* "League of Legends" role
    if (id === messages.games.leagueoflegends) {
        const role = roles.find((role) => role.name === "League of Legends");
        members.get(user.id).roles.remove(role);
    }
    //* "Ragnarok" role
    if (id === messages.games.ragnarok) {
        const role = roles.find((role) => role.name === "Ragnarok");
        members.get(user.id).roles.remove(role);
    }
});

bot.login(discord);
