import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { History } from 'history';

type RequireAuthProps = {
	authenticated: boolean;
	history: History;
};

const RequireAuth = <P extends object>(
	ComposedComponent: React.ComponentType<P>
) => {
	class Authentication extends Component<RequireAuthProps> {
		componentWillMount() {
			if (!this.props.authenticated) {
				this.props.history.push('/signin');
			}
		}

		componentWillUpdate(nextProps: RequireAuthProps) {
			if (!nextProps.authenticated) {
				this.props.history.push('/signin');
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

export default RequireAuth;
