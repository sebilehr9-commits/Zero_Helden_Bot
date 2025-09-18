const { SlashCommandBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("Erstellt ein Ticket")
    .addStringOption(option => option.setName("grund").setDescription("Grund für das Ticket").setRequired(true)),
  async execute(interaction) {
    if(interaction.guildId !== process.env.SERVER_ID) return;

    const reason = interaction.options.getString("grund");
    const category = interaction.guild.channels.cache.find(c => c.name === "tickets" && c.type === 4);

    const ticket = await interaction.guild.channels.create({
      name: `ticket-${interaction.user.username}`,
      type: 0, // Text channel
      parent: category ? category.id : null,
      permissionOverwrites: [
        { id: interaction.guild.id, deny: [PermissionsBitField.Flags.ViewChannel] },
        { id: interaction.user.id, allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages] },
      ]
    });

    ticket.send(`🎫 Ticket erstellt von ${interaction.user}. Grund: ${reason}`);
    interaction.reply({ content: `Dein Ticket wurde erstellt: ${ticket}`, ephemeral: true });
  }
};
