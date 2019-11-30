import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import SignIn from './pages/SignIn/SignIn';
import RequireAuth from './components/auth/RequireAuth';
import UnRequireAuth from './components/auth/UnRequireAuth';
import Root from './Root';
import './index.css';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Switch>
        <Route path="/signin" exact component={UnRequireAuth(SignIn)} />
        <Route path="/" component={RequireAuth(Admin)} />
      </Switch>
    </BrowserRouter>
  </Root>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
