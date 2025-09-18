require("dotenv").config();
const { REST, Routes } = require("discord.js");
const fs = require("fs");

const commands = [];
const commandFiles = fs.readdirSync("./commands").filter(f => f.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
}

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log(`⚡ Registriere ${commands.length} Commands...`);

    await rest.put(
      Routes.applicationCommands(process.env.CLIENT_ID), // global registrieren
      { body: commands }
    );

    console.log("✅ Commands erfolgreich registriert!");
  } catch (error) {
    console.error(error);
  }
})();
