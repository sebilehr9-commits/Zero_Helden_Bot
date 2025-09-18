module.exports = {
  name: "guildMemberAdd",
  execute(member) {
    const channel = member.guild.channels.cache.find(c => c.name === "welcome");
    if (channel) channel.send(`👋 Willkommen ${member}! Bitte lies die Regeln.`);
  }
};
