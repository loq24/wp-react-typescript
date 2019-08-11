import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, AnyAction } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Admin from "./pages/admin/Admin";
import SignIn from "./pages/SignIn/SignIn";
import RequireAuth from "./components/auth/RequireAuth";
import UnRequireAuth from "./components/auth/UnRequireAuth";
import { ThunkDispatch } from "redux-thunk";
import { AuthUserAction, ActionAuthTypes, fetchCurrentUser } from "./actions";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));
const token = localStorage.getItem("_wp_react_typescipt_token");
if (token) {
	store.dispatch<AuthUserAction>({ type: ActionAuthTypes.authUser });
	(store.dispatch as ThunkDispatch<{}, void, AnyAction>)(fetchCurrentUser());
}
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/signin" exact component={UnRequireAuth(SignIn)} />
				<Route path="/" component={RequireAuth(Admin)} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
