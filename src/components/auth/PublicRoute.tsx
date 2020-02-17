import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuthSelector } from 'selectors';

interface PublicRouteProps extends RouteProps {
  children: React.ReactNode;
  defaultPath?: string;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  children,
  defaultPath = '/',
  ...rest
}) => {
  const { authenticated } = useAuthSelector();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !authenticated ? (
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
