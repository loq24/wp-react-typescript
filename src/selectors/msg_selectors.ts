import { AppState } from 'reducers';

export const successMsgSelector = (state: AppState) => state.msg.success;
export const warningMsgSelector = (state: AppState) => state.msg.warning;
