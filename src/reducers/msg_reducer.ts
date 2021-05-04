import {
  WarningMessageAction,
  ActionMessagesTypes,
  ClearMessageAction,
  SuccessMessageAction,
  TestingMessageAction
} from "../actions";

type Actions =
  | WarningMessageAction
  | ClearMessageAction
  | SuccessMessageAction
  | TestingMessageAction;

export interface InitialState {
  warning: string;
  success: string;
}

export const initialState: InitialState = {
  warning: "",
  success: ""
};

const msgReducer = (state = initialState, action: Actions) => {
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
};

export default msgReducer;
