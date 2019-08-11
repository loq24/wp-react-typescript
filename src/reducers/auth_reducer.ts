import { AuthUserAction, UnAuthUserAction } from "../actions";
import { ActionAuthTypes } from "../actions";

type Actions = AuthUserAction | UnAuthUserAction;

export interface AuthState {
	authenticated: boolean;
}

const initialState: AuthState = {
	authenticated: false
};

export default function(state = initialState, action: Actions) {
	switch (action.type) {
		case ActionAuthTypes.authUser:
			return { authenticated: true };
		case ActionAuthTypes.unAuthUser:
			return { authenticated: false };
		default:
			return state;
	}
}
