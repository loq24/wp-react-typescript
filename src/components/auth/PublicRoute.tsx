import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from 'selectors';

interface PublicRouteProps extends RouteProps {
  children: React.ReactNode;
  defaultPath?: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  defaultPath = '/',
  ...rest
}) => {
  const isAuthenticated = useSelector(authSelector);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: defaultPath,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
