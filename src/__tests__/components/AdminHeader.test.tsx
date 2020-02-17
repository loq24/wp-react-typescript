import React from 'react';
import AdminHeader from 'components/AdminHeader';
import { shallow, ShallowWrapper } from 'enzyme';
import Toggle from 'components/Toggle/Toggle';
import { mockUser } from 'utils/mock_helpers';

describe('Header Component', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    wrapper = shallow(
      <AdminHeader currentUser={mockUser} unAuthUser={() => {}} />
    );
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
