import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AdminSidebarNav from 'components/AdminSidebarNav/AdminSidebarNav';
import NavItem from 'components/AdminSidebarNav/NavItem';

describe('SidebarNav component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<AdminSidebarNav pathName="/" />);
  });

  it('shows a dashboard menu', () => {
    expect(
      wrapper.find(NavItem).findWhere(n => n.prop('toPath') === '/')
    ).toHaveLength(1);
  });

  it('shows posts menu', () => {
    expect(
      wrapper.find(NavItem).findWhere(n => n.prop('toPath') === '/posts')
    ).toHaveLength(1);
  });

  it('shows an add new menu', () => {
    expect(
      wrapper.find(NavItem).findWhere(n => n.prop('toPath') === '/add-new')
    ).toHaveLength(1);
  });

  it('shows an account menu', () => {
    expect(
      wrapper.find(NavItem).findWhere(n => n.prop('toPath') === '/account')
    ).toHaveLength(1);
  });
});
