// Just a very simple creation, more will come to this soon!

const mess = require("discord.js");

module.exports = {
  name: "flip",
  descripton: "Heads or tail!",
  execute(message) {
    if (Math.random() >= 0.5) {
      message.reply("Your heads");
    } else {
      message.reply("Your tails");
    }
    const randomizer = Math.floor(Math.random() * 10 + 1);
    if (randomizer < 5) {
      message.reply(":x: You lose! :x:");
    } else if (randomizer > 5) {
      message.reply(":white_check_mark: You win! :white_check_mark: ");
    }
  }
};