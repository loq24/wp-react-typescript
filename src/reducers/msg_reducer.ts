import {
	WarningMessageAction,
	ActionMessagesTypes,
	ClearMessageAction,
	SuccessMessageAction,
	TestingMessageAction
} from '../actions';

type Actions =
	| WarningMessageAction
	| ClearMessageAction
	| SuccessMessageAction
	| TestingMessageAction;

interface IinitialState {
	warning: string;
	success: string;
}

export const initialState: IinitialState = {
	warning: '',
	success: ''
};

export default function(state = initialState, action: Actions) {
	switch (action.type) {
		case ActionMessagesTypes.warningMsg:
			return { ...state, warning: action.payload };
		case ActionMessagesTypes.successMsg:
			return { ...state, success: action.payload };
		case ActionMessagesTypes.clearMsg:
			return initialState;
		default:
			return state;
	}
}
