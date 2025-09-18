const { Player } = require("discord-player");

module.exports = (client) => {
  const player = new Player(client);

  player.on("trackStart", (queue, track) => {
    queue.textChannel.send(`🎶 Jetzt läuft: **${track.title}**`);
  });

  player.on("queueEnd", (queue) => {
    queue.textChannel.send("✅ Die Warteschlange ist vorbei!");
  });

  return player;
};
