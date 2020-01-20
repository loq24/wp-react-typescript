import React from 'react';
import Header from '../Header';
import { shallow, ShallowWrapper } from 'enzyme';
import { User } from '../../actions';
import Toggle from '../Toggle/Toggle';

describe('Header Component', () => {
  let wrapper: ShallowWrapper;
  let mockUser: User = {
    id: 1,
    name: 'Test User',
    description: 'This is a test user',
    url: 'https://lougiequisel.com'
  };
  beforeEach(() => {
    wrapper = shallow(<Header currentUser={mockUser} unAuthUser={() => {}} />);
  });

  it('has tagline', () => {
    expect(wrapper.find('[data-test="tagline"]')).toHaveLength(1);
  });

  it('has current user name', () => {
    expect(wrapper.find('[data-test="current-user-name"]').text()).toEqual(
      mockUser.name
    );
  });

  it('has sign out button', () => {
    expect(wrapper.find('[data-test="logout-btn"]')).toHaveLength(1);
  });

  it('shows the Toggle component', () => {
    expect(wrapper.find(Toggle)).toHaveLength(1);
  });
});
