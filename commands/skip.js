const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("skip")
    .setDescription("Überspringt den aktuellen Song"),
  async execute(interaction) {
    const queue = interaction.client.player.getQueue(interaction.guild);
    if (!queue || !queue.playing) return interaction.reply("❌ Keine Songs in der Warteschlange!");

    queue.skip();
    interaction.reply("⏭️ Song übersprungen!");
  }
};
