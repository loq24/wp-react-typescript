import { mountByRouter, mockPosts } from 'utils/mock_helpers';
import Posts from 'pages/Admin/Posts/Posts';
import { ReactWrapper } from 'enzyme';
import Placeholder from 'components/Placeholder/Placeholder';
import PostList from 'pages/Admin/Posts/PostList';
import Item from 'pages/Admin/Posts/Item';
import PostModal from 'pages/Admin/Posts/PostModal';
import moxios from 'moxios';

describe('Posts Component', () => {
  let wrapper: ReactWrapper;
  const path = '/posts';
  beforeEach(() => {
    moxios.install();
    wrapper = mountByRouter(path);
  });
  afterEach(() => {
    moxios.uninstall();
    wrapper.unmount();
  });

  it(`renders the Posts component using ${path} path`, () => {
    expect(wrapper.find(Posts)).toHaveLength(1);
  });

  it('shows Placeholder component when the post is still empty', () => {
    expect(wrapper.find(Placeholder)).toHaveLength(1);
  });

  describe('Fetching posts', () => {
    it('shows the PostList component when the posts are loaded', done => {
      moxios.wait(function() {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: mockPosts
          })
          .then(function() {
            wrapper.update();
            expect(wrapper.find(PostList)).toHaveLength(1);
            done();
          });
      });
    });

    it('shows Post Items when the posts are loaded', done => {
      moxios.wait(function() {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: mockPosts
          })
          .then(function() {
            wrapper.update();
            expect(wrapper.find(Item)).toHaveLength(mockPosts.length);
            done();
          });
      });
    });

    it('opens a modal when the delete button is clicked', done => {
      moxios.wait(function() {
        let request = moxios.requests.mostRecent();
        request
          .respondWith({
            status: 200,
            response: mockPosts
          })
          .then(function() {
            wrapper.update();
            wrapper
              .find('button[data-test="delete-post-btn"]')
              .first()
              .simulate('click');
            expect(wrapper.find(PostModal)).toHaveLength(1);
            done();
          });
      });
    });
  });
});
