import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from 'selectors';

interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode;
  defaultPath?: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  defaultPath = '/signin',
  ...rest
}) => {
  const isAuthenticated = useSelector(authSelector);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
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
