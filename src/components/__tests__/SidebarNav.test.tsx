import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SidebarNav from '../SidebarNav/SidebarNav';

describe('SidebarNav component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<SidebarNav basePath="/" pathName="/" />);
  });

  it('shows an active menu', () => {
    expect(
      wrapper.find('[data-test="dashboard-link"]').props().className
    ).toContain('active');
  });

  it('shows posts menu', () => {
    expect(wrapper.find('[data-test="posts-link"]')).toHaveLength(1);
  });

  it('shows an add new menu', () => {
    expect(wrapper.find('[data-test="add-new-link"]')).toHaveLength(1);
  });

  it('shows an account menu', () => {
    expect(wrapper.find('[data-test="account-link"]')).toHaveLength(1);
  });
});
