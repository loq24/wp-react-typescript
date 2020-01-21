import msgReducer, { initialState } from 'reducers/msg_reducer';
import {
	ActionMessagesTypes,
	TestingMessageAction,
	ClearMessageAction,
	SuccessMessageAction
} from 'actions';

describe('Message reducer', () => {
	it('should return default state', () => {
		const action = {
			type: ActionMessagesTypes.forTesting
		} as TestingMessageAction;

		const newState = msgReducer(initialState, action);

		expect(newState).toMatchObject(initialState);
	});

	it('handles an action type of clearMsg', () => {
		const action = {
			type: ActionMessagesTypes.clearMsg
		} as ClearMessageAction;

		const newState = msgReducer(initialState, action);

		expect(newState).toMatchObject(initialState);
	});

	it('handles an action type of successMsg', () => {
		const testMsg = 'Test success msg';
		const action = {
			type: ActionMessagesTypes.successMsg,
			payload: testMsg
		} as SuccessMessageAction;

		const newState = msgReducer(initialState, action);

		expect(newState.success).toEqual(testMsg);
	});

	it('handles an action type of warningMessage', () => {
		const testMsg = 'Test warning msg';
		const action = {
			type: ActionMessagesTypes.warningMsg,
			payload: testMsg
		};

		const newState = msgReducer(initialState, action);

		expect(newState.warning).toEqual(testMsg);
	});
});
