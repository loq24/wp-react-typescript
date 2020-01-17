import { AppState } from 'reducers';

export const authSelector = (state: AppState) => state.auth.authenticated;
