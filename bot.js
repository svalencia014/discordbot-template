const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const config = require("./config.json");
const fs = require('fs');

const client = new Client({ intents: [GatewayIntentBits.Guilds ] });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, c => {
    console.log("Bot is online!");
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`${command} not found`);
    }

    try {
        await interaction.deferReply();
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: toString(error)});
    }

    //Leave for debugging - Remove for Prod
    console.log(interaction);
});

client.login(config.discordToken);