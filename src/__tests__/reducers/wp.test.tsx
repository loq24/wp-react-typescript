import wpReducer, { initialState } from 'reducers/wp_reducer';
import {
	ActionWPTypes,
	TestingWPAction,
	Post,
	User,
	FetchPostAction,
	FetchPostsAction,
	DeletePostAction,
	UpdatePostAction,
	PublishPostAction,
	FetchCurrentUserAction
} from 'actions';

describe('WP reducer', () => {
	let post: Post;
	let postArr: Post[];
	beforeEach(() => {
		post = {
			id: 1,
			title: {
				rendered: 'Test Title'
			},
			content: {
				rendered: 'Test Content'
			},
			excerpt: {
				rendered: 'Test Excerpt'
			},
			modified: 'Sept 2019',
			date: 'Sept 2019'
		};

		postArr = [post, { ...post, id: 2 }, { ...post, id: 3 }];
	});

	it('should return default state', () => {
		const action = {
			type: ActionWPTypes.forTesting
		} as TestingWPAction;

		const newState = wpReducer(initialState, action);
		expect(newState).toMatchObject(initialState);
	});

	it('handles an action of type fetchPosts', () => {
		const action = {
			type: ActionWPTypes.fetchPosts,
			payload: postArr
		} as FetchPostsAction;

		const newState = wpReducer(initialState, action);
		expect(newState.posts).toEqual(postArr);
	});

	it('handles an action of type fetchPost', () => {
		const action = {
			type: ActionWPTypes.fetchPost,
			payload: post
		} as FetchPostAction;

		const newState = wpReducer(initialState, action);
		expect(newState.post).toMatchObject(post);
	});

	it('handles an action of type deletePost', () => {
		const action = {
			type: ActionWPTypes.deletePost,
			payload: 1
		} as DeletePostAction;

		const expectedOutput = [{ ...post, id: 2 }, { ...post, id: 3 }];
		const newState = wpReducer({ ...initialState, posts: postArr }, action);
		expect(newState.posts).toEqual(expectedOutput);
	});

	it('handles an action of type updatePost', () => {
		const action = {
			type: ActionWPTypes.updatePost
		} as UpdatePostAction;

		const newState = wpReducer(initialState, action);
		expect(newState).toMatchObject(initialState);
	});

	it('handles an action of type publishPost', () => {
		const action = {
			type: ActionWPTypes.publishPost
		} as PublishPostAction;

		const newState = wpReducer(initialState, action);
		expect(newState).toMatchObject(initialState);
	});

	it('handles an action of type fetchCurrentUser', () => {
		const sampleUser: User = {
			id: 1,
			name: 'Lougie',
			description: 'Developer',
			url: 'https://lougiequisel.com'
		};
		const action = {
			type: ActionWPTypes.fetchCurrentUser,
			payload: sampleUser
		} as FetchCurrentUserAction;

		const newState = wpReducer(initialState, action);
		expect(newState.currentUser).toMatchObject(sampleUser);
	});
});
