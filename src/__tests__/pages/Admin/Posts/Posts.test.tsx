import React from 'react';
import { mountByRouter } from 'utils/helpers';
import Posts from 'pages/Admin/Posts/Posts';
import { ReactWrapper } from 'enzyme';
import { Post } from 'actions';
import Placeholder from 'components/Placeholder/Placeholder';
import Item from 'pages/Admin/Posts/Item';
import moxios from 'moxios';

describe('Posts Component', () => {
  let wrapper: ReactWrapper;
  let mockPosts: Post[];
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
    beforeEach(() => {
      mockPosts = [
        {
          id: 1,
          title: {
            rendered: 'Mock Title 1'
          },
          content: {
            rendered: 'Mock Content 1'
          },
          excerpt: {
            rendered: 'Mock Excerpt 1'
          },
          modified: '2019-09-10T21:37:06',
          date: '2019-09-10T21:37:069'
        },
        {
          id: 2,
          title: {
            rendered: 'Mock Title 2'
          },
          content: {
            rendered: 'Mock Content 2'
          },
          excerpt: {
            rendered: 'Mock Excerpt 2'
          },
          modified: '2019-09-10T21:37:06',
          date: '2019-09-10T21:37:069'
        }
      ];
    });

    it('can fetch posts and display each in an Item component', done => {
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
            expect(wrapper.find('div[data-test="delete-modal"]')).toHaveLength(
              1
            );
            done();
          });
      });
    });
  });
});
