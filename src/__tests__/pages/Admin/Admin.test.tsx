import { ReactWrapper } from 'enzyme';
import AdminHeader from 'components/AdminHeader';
import AdminSidebarNav from 'components/AdminSidebarNav/AdminSidebarNav';
import Introduction from 'pages/Admin/Introduction';
import { mountByRouter } from 'utils/mock_helpers';

describe('Admin component', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mountByRouter('/');
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('displays the header component', () => {
    expect(wrapper.find(AdminHeader)).toHaveLength(1);
  });

  it('displays the sidebar nav component', () => {
    expect(wrapper.find(AdminSidebarNav)).toHaveLength(1);
  });

  it('shows the Introduction page by default', () => {
    expect(wrapper.find(Introduction)).toHaveLength(1);
  });
});
