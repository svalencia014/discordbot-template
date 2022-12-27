# Discord Bot Template
This is a template for a discord.js bot. To get started, add your command(s) into the commands folder by either deleting `example.js` or modifying it and adding extra files as needed.

To run the bot:
1. Go into `config.json` and replace the following:
- `"discordToken": "insert_token_here"`: Replace `insert_token_here` with your bot's token.
- `"guildId": "insert_guild_id_here"`: Replace `insert_guild_id_here` with your guild's ID (Used for Slash Command Deployment).
- `"clientId: "insert_client_id_here"`: Replace `insert_client_id_here` with your bot's client ID (Used for Slash Command Deployment).

2. In a command prompt run `node -v` and ensure it is `v19.3.0` or higher. (It *should* run on slightly older node versions but I wrote this on `v19.3.0` so I can't guarantee it will work on older versions.)

3. Run `npm i` to install the required packages. (Should just be discord.js)

4. Run `node ./deploy.js` to deploy your slash commands. It will run through all files in `./commands/` so make sure your commands are up to date. If you add or remove any slash commands you must rerun `node ./deploy.js`

5.  Run `node .` to start the bot. Code will output `Bot is online!` when it is connected to discord and ready to accept commands.
