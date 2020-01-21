import { ReactWrapper } from 'enzyme';
import Header from 'components/Header';
import SidebarNav from 'components/SidebarNav/SidebarNav';
import Introduction from 'pages/admin/Introduction';
import { mountByRouter } from 'utils/helpers';

describe('Admin component', () => {
  let wrapper: ReactWrapper;

  beforeEach(() => {
    wrapper = mountByRouter('/admin');
  });
  afterEach(() => {
    wrapper.unmount();
  });

  it('displays the header component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('provides a tagline for the header component', () => {
    expect(wrapper.find('span[data-test="tagline"]')).toHaveLength(1);
  });

  it('displays the sidebar nav component', () => {
    expect(wrapper.find(SidebarNav)).toHaveLength(1);
  });

  it('shows the Introduction page by default', () => {
    expect(wrapper.find(Introduction)).toHaveLength(1);
  });
});
