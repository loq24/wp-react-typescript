import {
  AuthUserAction,
  UnAuthUserAction,
  TestingAuthAction
} from "../actions";
import { ActionAuthTypes } from "../actions";

type Actions = AuthUserAction | UnAuthUserAction | TestingAuthAction;

export interface AuthState {
  authenticated: boolean;
}

export const initialState: AuthState = {
  authenticated: false
};

const authReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionAuthTypes.authUser:
      return { authenticated: true };
    case ActionAuthTypes.unAuthUser:
      return { authenticated: false };
    default:
      return state;
  }
};

export default authReducer;
