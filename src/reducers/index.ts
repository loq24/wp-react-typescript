import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import msgReducer from './msg_reducer';
import wpReducer from './wp_reducer';

export const rootReducer = combineReducers({
	auth: authReducer,
	msg: msgReducer,
	wp: wpReducer
});

export type AppState = ReturnType<typeof rootReducer>;
