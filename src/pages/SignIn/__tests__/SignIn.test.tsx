import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Root from '../../../Root';
import SignIn from '../SignIn';
import SignInForm from '../SignInForm';

describe('SignIn component', () => {
	let wrapper: ReactWrapper;

	beforeEach(() => {
		wrapper = mount(
			<Root>
				<SignIn />
			</Root>
		);
	});

	afterEach(() => {
		wrapper.unmount();
	});

	it('shows the username & password', () => {
		expect(wrapper.find('[data-test="username-txt"]').length).toEqual(1);
		expect(wrapper.find('[data-test="password-txt"]').length).toEqual(1);
	});

	it('shows the sign in form', () => {
		expect(wrapper.find(SignInForm).length).toEqual(1);
	});
});
