import authReducer, { initialState } from 'reducers/auth_reducer';
import {
	ActionAuthTypes,
	AuthUserAction,
	UnAuthUserAction,
	TestingAuthAction
} from 'actions';

describe('Auth reducer', () => {
	it('should return default state', () => {
		const action = {
			type: ActionAuthTypes.forTesting
		} as TestingAuthAction;

		const newState = authReducer(initialState, action);

		expect(newState).toMatchObject(initialState);
	});

	it('handles an action type of authUser', () => {
		const action = {
			type: ActionAuthTypes.authUser,
			payload: true
		} as AuthUserAction;

		const newState = authReducer(initialState, action);

		expect(newState.authenticated).toEqual(true);
	});

	it('handles an action type of unauthUser', () => {
		const action = {
			type: ActionAuthTypes.unAuthUser,
			payload: false
		} as UnAuthUserAction;

		const newState = authReducer(initialState, action);

		expect(newState.authenticated).toEqual(false);
	});
});
