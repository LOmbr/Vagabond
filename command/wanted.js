exports.wanted = function wanted(tmp, client) {
		client.fetchUser(tmp).then(myUser => {
			ret = myUser.avatarURL.split('?')[0];
			return ret;
		});
}