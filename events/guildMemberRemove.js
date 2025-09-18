module.exports = {
  name: "guildMemberRemove",
  execute(member) {
    const channel = member.guild.channels.cache.find(c => c.name === "goodbye");
    if (channel) channel.send(`😢 ${member.user.tag} hat den Server verlassen.`);
  }
};
