import axios from 'axios';
import { Dispatch } from 'redux';
import Constants from '../constants';
import {
	ActionWPTypes,
	ActionMessagesTypes,
	SuccessMessageAction,
	ClearMessageAction,
	WarningMessageAction,
	ActionAuthTypes,
	UnAuthUserAction
} from 'actions';
import { tokenHeader } from 'actions/auth';

export interface User {
	id: number;
	name: string;
	description: string;
	url: string;
}

export interface FetchCurrentUserAction {
	type: ActionWPTypes.fetchCurrentUser;
	payload: User;
}

export const fetchCurrentUser = () => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await axios.get<User>(
				`${Constants.apiUri}/users/me`,
				tokenHeader()
			);
			dispatch<FetchCurrentUserAction>({
				type: ActionWPTypes.fetchCurrentUser,
				payload: response.data
			});
		} catch (error) {
			dispatch<UnAuthUserAction>({ type: ActionAuthTypes.unAuthUser });
			dispatch<ClearMessageAction>({ type: ActionMessagesTypes.clearMsg });
		}
	};
};

interface Rendered {
	rendered: string;
}

export interface Post {
	id: number;
	title: Rendered;
	content: Rendered;
	excerpt: Rendered;
	modified: string;
	date: string;
}

export interface FetchPostAction {
	type: ActionWPTypes.fetchPost;
	payload: Post;
}

export type FetchPostType = (id: string) => void;

export const fetchPost: FetchPostType = id => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await axios.get(`${Constants.apiUri}/posts/${id}`);
			dispatch<FetchPostAction>({
				type: ActionWPTypes.fetchPost,
				payload: response.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export interface FetchPostsAction {
	type: ActionWPTypes.fetchPosts;
	payload: Post[];
}

export const fetchPosts = () => {
	return async (dispatch: Dispatch) => {
		try {
			const response = await axios.get<Post[]>(`${Constants.apiUri}/posts`);
			dispatch<FetchPostsAction>({
				type: ActionWPTypes.fetchPosts,
				payload: response.data
			});
			dispatch<ClearMessageAction>({ type: ActionMessagesTypes.clearMsg });
		} catch (error) {
			console.log(error);
		}
	};
};

export interface UpdatePostAction {
	type: ActionWPTypes.updatePost;
}

export interface NewPostData {
	title: string;
	content: string;
	status?: string;
}

export type UpdatePostType = (
	id: string,
	newPostData: NewPostData,
	callback: () => void
) => void;

export const updatePost: UpdatePostType = (id, newPostData, callback) => {
	return async (dispatch: Dispatch) => {
		try {
			await axios.post(
				`${Constants.apiUri}/posts/${id}`,
				newPostData,
				tokenHeader()
			);
			dispatch<UpdatePostAction>({ type: ActionWPTypes.updatePost });
			dispatch<SuccessMessageAction>({
				type: ActionMessagesTypes.successMsg,
				payload: 'The post was successfully updated!'
			});
		} catch (error) {
			console.log(error);
		}
		callback();
	};
};

export interface DeletePostAction {
	type: ActionWPTypes.deletePost;
	payload: number;
}

export const deletePost = (id: number, callback: () => void) => {
	return async (dispatch: Dispatch) => {
		try {
			await axios.delete(`${Constants.apiUri}/posts/${id}`, tokenHeader());
			dispatch<DeletePostAction>({
				type: ActionWPTypes.deletePost,
				payload: id
			});
			dispatch<WarningMessageAction>({
				type: ActionMessagesTypes.warningMsg,
				payload: 'The post was successfully deleted.'
			});
		} catch (error) {
			console.log('Error');
		}
		callback();
	};
};

export interface PublishPostAction {
	type: ActionWPTypes.publishPost;
}

export const publishPost = (newPostData: NewPostData, callback: () => void) => {
	return async (dispatch: Dispatch) => {
		try {
			await axios.post<NewPostData>(
				`${Constants.apiUri}/posts`,
				newPostData,
				tokenHeader()
			);
			dispatch<PublishPostAction>({ type: ActionWPTypes.publishPost });
			dispatch<SuccessMessageAction>({
				type: ActionMessagesTypes.successMsg,
				payload: 'You have successfully published a post.'
			});
		} catch (error) {
			dispatch<WarningMessageAction>({
				type: ActionMessagesTypes.warningMsg,
				payload: 'Sorry, we are having problem adding the new post.'
			});
			console.log(error);
		}
		callback();
	};
};

export interface TestingMessageAction {
	type: ActionMessagesTypes.forTesting;
}

export interface TestingWPAction {
	type: ActionWPTypes.forTesting;
}
