const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("announce")
    .setDescription("Postet eine Ankündigung")
    .addStringOption(opt =>
      opt.setName("text")
         .setDescription("Ankündigungstext")
         .setRequired(true)
    ),
  async execute(interaction) {
    const text = interaction.options.getString("text");
    const channel = interaction.guild.channels.cache.find(c => c.name === "announcements") || interaction.channel;
    if (channel) channel.send(`📢 **Ankündigung:** ${text}`);
    await interaction.reply({ content: "✅ Ankündigung gepostet!", ephemeral: true });
  }
};
