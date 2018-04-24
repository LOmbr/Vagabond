exports.wanted = function wanted(tmp, client) {
		client.fetchUser(tmp).then(myUser => {
			return myUser.avatarURL; // My user's avatar is here!
		});
}