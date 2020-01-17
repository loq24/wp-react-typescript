import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { History } from 'history';

type RequireAuthProps = {
  authenticated: boolean;
  history: History;
};

const UnRequireAuth = <P extends object>(
  ComposedComponent: React.ComponentType<P>
) => {
  class Authentication extends Component<RequireAuthProps> {
    UNSAFE_componentWillMount() {
      if (this.props.authenticated) {
        this.props.history.push('/');
      }
    }

    UNSAFE_componentWillUpdate(nextProps: RequireAuthProps) {
      if (nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      const { ...props } = this.props;
      return <ComposedComponent {...(props as P)} />;
    }
  }

  const mapStateToProps = (state: AppState) => {
    return { authenticated: state.auth.authenticated };
  };

  return connect(mapStateToProps)(Authentication);
};

export default UnRequireAuth;
