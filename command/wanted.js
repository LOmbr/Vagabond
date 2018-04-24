exports.wanted = function wanted(tmp, client) {
		client.fetchUser(tmp).then(myUser => {
			console.log(myUser.avatarURL);
			return myUser.avatarURL.toString.split('?')[0]; // My user's avatar is here!
		});
}