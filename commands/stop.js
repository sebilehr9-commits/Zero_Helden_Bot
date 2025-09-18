const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("stop")
    .setDescription("Stoppt die Wiedergabe und verlässt den Voice-Channel"),
  async execute(interaction) {
    const queue = interaction.client.player.getQueue(interaction.guild);
    if (!queue) return interaction.reply("❌ Keine Songs in der Warteschlange!");

    queue.destroy();
    interaction.reply("⏹️ Musik gestoppt und Voice-Channel verlassen!");
  }
};
