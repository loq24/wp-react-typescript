export enum ActionWPTypes {
	fetchPosts = "FETCH_POSTS",
	fetchPost = "FETCH_POST",
	deletePost = "DELETE_POST",
	updatePost = "UPDATE_POST",
	publishPost = "PUBLISH_POST",
	fetchCurrentUser = "FETCH_CURRENT_USER"
}

export enum ActionAuthTypes {
	authUser = "AUTH_USER",
	unAuthUser = "UNAUTH_USER",
	currentUser = "CURRENT_USER"
}

export enum ActionMessagesTypes {
	warningMsg = "WARNING_MESSAGE",
	successMsg = "SUCCESS_MESSAGE",
	clearMsg = "CLEAR_MSG"
}
