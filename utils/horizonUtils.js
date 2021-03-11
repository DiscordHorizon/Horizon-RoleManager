let config;
try {
    config = require("../config.json");
} catch (error) {
    config = null;
}

exports.discord = config ? config.discord : process.env.DISCORD;
exports.messages = {
    rules: config ? config.rules : process.env.RULES,
    tasks: config ? config.tasks : process.env.TASKS,
    games: {
        valorant: config ? config.games.valorant : process.env.VALORANT,
        leagueoflegends: config
            ? config.games.leagueoflegends
            : process.env.LEAGUEOFLEGENDS,
        ragnarok: config ? config.games.ragnarok : process.env.RAGNAROK,
    },
};
