import React from 'react';
import Header from '../Header';
import { ReactWrapper } from 'enzyme';
import { mountByRouter } from 'utils/helpers';
import Toggle from '../Toggle/Toggle';

describe('Header Component', () => {
  let wrapper: ReactWrapper;
  const path = '/admin';
  const mockUser = {
    id: 1,
    name: 'Mock User',
    description: 'This is a mock user',
    url: 'https://github.com/loq24/wp-react-typescript/'
  };

  beforeEach(() => {
    const initialState = {
      wp: {
        currentUser: mockUser
      }
    };
    wrapper = mountByRouter(path, initialState);
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('renders the Header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('renders children components', () => {
    expect(
      wrapper.find('[data-test="children-area"]').text().length
    ).toBeGreaterThanOrEqual(1);
  });

  it('has current user name', () => {
    expect(wrapper.find('[data-test="current-user-name"]').text()).toEqual(
      mockUser.name
    );
  });

  it('has sign out button', () => {
    expect(wrapper.find('button[data-test="logout-btn"]')).toHaveLength(1);
  });

  it('shows the Toggle component', () => {
    expect(wrapper.find(Toggle)).toHaveLength(1);
  });
});
