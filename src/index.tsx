import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Root from './Root';

import PrivateRoute from 'components/auth/PrivateRoute';
import PublicRoute from 'components/auth/PublicRoute';

import Admin from 'pages/admin/Admin';
import SignIn from 'pages/SignIn/SignIn';

import Home from 'pages/Home/Home';
import Post from 'pages/Post/Post';

import './index.css';

ReactDOM.render(
  <Root>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" exact component={Post} />
        <PublicRoute path="/signin">
          <SignIn />
        </PublicRoute>
        <PrivateRoute path="/admin">
          <Admin />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  </Root>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
