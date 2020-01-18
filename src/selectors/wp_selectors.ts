import { AppState } from 'reducers';

export const currentUserSelector = (state: AppState) => state.wp.currentUser;
export const postSelector = (state: AppState) => state.wp.post;
export const postsSelector = (state: AppState) => state.wp.posts;
