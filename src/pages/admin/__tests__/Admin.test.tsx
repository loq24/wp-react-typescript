import { ReactWrapper } from 'enzyme';
import Header from 'components/Header';
import SidebarNav from 'components/SidebarNav';
import Introduction from 'pages/Admin/Introduction';
import { mountByRouter } from 'utils/helpers';

describe('Admin component', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mountByRouter('/');
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('displays the header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('displays the sidebar nav component', () => {
    expect(wrapper.find(SidebarNav)).toHaveLength(1);
  });

  it('shows the Introduction page by default', () => {
    expect(wrapper.find(Introduction)).toHaveLength(1);
  });
});
