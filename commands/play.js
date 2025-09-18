const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Spielt einen Song im Voice-Channel")
    .addStringOption(option =>
      option.setName("url")
            .setDescription("YouTube/Spotify-Link oder Suchbegriff")
            .setRequired(true)
    ),
  async execute(interaction) {
    const url = interaction.options.getString("url");
    const member = interaction.member;
    if (!member.voice.channel) return interaction.reply("❌ Du musst in einem Voice-Channel sein!");

    const queue = interaction.client.player.createQueue(interaction.guild);
    await queue.connect(member.voice.channel);

    const track = await interaction.client.player.play(queue, url, { member: member, textChannel: interaction.channel, skip: true });
    interaction.reply(`🎶 Spielt jetzt: **${track.title}**`);
  }
};
