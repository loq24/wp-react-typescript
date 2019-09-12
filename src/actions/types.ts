export enum ActionWPTypes {
	fetchPosts = 'FETCH_POSTS',
	fetchPost = 'FETCH_POST',
	deletePost = 'DELETE_POST',
	updatePost = 'UPDATE_POST',
	publishPost = 'PUBLISH_POST',
	fetchCurrentUser = 'FETCH_CURRENT_USER',
	forTesting = 'TESTING_WP_TYPE'
}

export enum ActionAuthTypes {
	authUser = 'AUTH_USER',
	unAuthUser = 'UNAUTH_USER',
	currentUser = 'CURRENT_USER',
	forTesting = 'TESTING_AUTH_TYPE'
}

export enum ActionMessagesTypes {
	warningMsg = 'WARNING_MESSAGE',
	successMsg = 'SUCCESS_MESSAGE',
	clearMsg = 'CLEAR_MSG',
	forTesting = 'TESTING_MESSAGE_TYPE'
}
