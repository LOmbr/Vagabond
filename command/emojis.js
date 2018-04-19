exports.emojis = function emojis(msg) {
	return emojiList = msg.guild.emojis.map(e=>e.toString()).join(" ");
}