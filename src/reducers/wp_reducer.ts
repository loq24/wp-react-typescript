import {
	FetchCurrentUserAction,
	User,
	ActionWPTypes,
	FetchPostsAction,
	FetchPostAction,
	UpdatePostAction,
	PublishPostAction,
	DeletePostAction,
	Post
} from "../actions";

type Actions =
	| FetchCurrentUserAction
	| FetchPostsAction
	| FetchPostAction
	| UpdatePostAction
	| PublishPostAction
	| DeletePostAction;

interface InitialState {
	currentUser?: User;
	posts: Post[];
	post?: Post;
}

const initialValues: InitialState = {
	posts: []
};

export default function(state = initialValues, action: Actions) {
	switch (action.type) {
		case ActionWPTypes.fetchCurrentUser:
			return { ...state, currentUser: action.payload };
		case ActionWPTypes.fetchPosts:
			return { ...state, posts: action.payload, post: undefined };
		case ActionWPTypes.updatePost || ActionWPTypes.publishPost:
			return { ...state, posts: [] };
		case ActionWPTypes.fetchPost:
			return { ...state, post: action.payload };
		case ActionWPTypes.deletePost:
			return {
				...state,
				posts: state.posts.filter((post: Post) => post.id !== action.payload)
			};
		default:
			return state;
	}
}
