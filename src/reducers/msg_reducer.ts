import {
	WarningMessageAction,
	ActionMessagesTypes,
	ClearMessageAction,
	SuccessMessageAction
} from "../actions";

type Actions = WarningMessageAction | ClearMessageAction | SuccessMessageAction;

interface IinitialState {
	error: string;
	warning: string;
	success: string;
}

const intialState: IinitialState = {
	error: "",
	warning: "",
	success: ""
};

export default function(state = intialState, action: Actions) {
	switch (action.type) {
		case ActionMessagesTypes.warningMsg:
			return { ...state, warning: action.payload };
		case ActionMessagesTypes.clearMsg:
			return intialState;
		case ActionMessagesTypes.successMsg:
			return { ...state, success: action.payload };
		default:
			return state;
	}
}
