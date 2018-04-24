exports.wanted = function wanted(tmp, client) {
		client.fetchUser(tmp).then(myUser => {
			console.log(myUser.avatarURL.split('?'));
			return myUser.avatarURL; // My user's avatar is here!
		});
}