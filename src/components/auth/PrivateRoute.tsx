import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuthSelector } from 'selectors';

interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode;
  defaultPath?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  defaultPath = '/signin',
  ...rest
}) => {
  const { authenticated } = useAuthSelector();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
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

export default PrivateRoute;
