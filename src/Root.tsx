import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { ThunkDispatch } from 'redux-thunk';
import { AuthUserAction, ActionAuthTypes, fetchCurrentUser } from './actions';

type RootProps = {
  children: React.ReactNode;
  initialState?: {};
};

const Root: React.FC<RootProps> = ({ children, initialState = {} }) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  const token = localStorage.getItem('_wp_react_typescipt_token');
  if (token) {
    store.dispatch<AuthUserAction>({ type: ActionAuthTypes.authUser });
    (store.dispatch as ThunkDispatch<{}, void, AnyAction>)(fetchCurrentUser());
  }
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
