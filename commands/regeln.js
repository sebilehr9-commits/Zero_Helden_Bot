const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("regeln")
    .setDescription("Postet die Server-Regeln"),
  async execute(interaction) {
    const channel = interaction.guild.channels.cache.find(c => c.name === "regeln") || interaction.channel;
    if (channel) channel.send("📜 Hier sind die Server-Regeln:\n1. Sei nett\n2. Kein Spam\n3. Respektiere andere");
    await interaction.reply({ content: "✅ Regeln gepostet!", ephemeral: true });
  }
};
