import axios from 'axios';
import { Dispatch } from 'redux';
import Constants from '../constants';
import { ActionAuthTypes, ActionMessagesTypes } from 'actions/types';

export const tokenHeader = (): { headers: { Authorization: string } } => {
	const token = localStorage.getItem('_wp_react_typescipt_token');
	return { headers: { Authorization: `Bearer ${token}` } };
};

export interface FormValues {
	username: string;
	password: string;
}

export interface AuthUserAction {
	type: ActionAuthTypes.authUser;
}

export interface WarningMessageAction {
	type: ActionMessagesTypes.warningMsg;
	payload: string;
}

export interface ClearMessageAction {
	type: ActionMessagesTypes.clearMsg;
}

export type AuthUserType = (
	credentials: FormValues,
	callback: () => void
) => void;

export const authUser: AuthUserType = (credentials, callback) => {
	return async (dispatch: Dispatch) => {
		try {
			dispatch<ClearMessageAction>({ type: ActionMessagesTypes.clearMsg });
			const response = await axios.post(`${Constants.jwtAuthUri}`, credentials);
			dispatch<AuthUserAction>({ type: ActionAuthTypes.authUser });
			localStorage.setItem('_wp_react_typescipt_token', response.data.token);
		} catch (error) {
			dispatch<WarningMessageAction>({
				type: ActionMessagesTypes.warningMsg,
				payload: 'Incorrect username or password'
			});
		}
		callback();
	};
};

export interface UnAuthUserAction {
	type: ActionAuthTypes.unAuthUser;
}

export interface SuccessMessageAction {
	type: ActionMessagesTypes.successMsg;
	payload: string;
}

export const unAuthUser = () => {
	localStorage.removeItem('_wp_react_typescipt_token');
	return (dispatch: Dispatch) => {
		dispatch<UnAuthUserAction>({ type: ActionAuthTypes.unAuthUser });
		dispatch<ClearMessageAction>({ type: ActionMessagesTypes.clearMsg });
		dispatch<SuccessMessageAction>({
			type: ActionMessagesTypes.successMsg,
			payload: 'Thanks for trying the app!'
		});
	};
};

export interface TestingAuthAction {
	type: ActionAuthTypes.forTesting;
}
