import React from 'react';
import Item from 'pages/Admin/Posts/Item';
import { shallow, ShallowWrapper } from 'enzyme';
import { Post } from 'actions';

describe('Item component', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => {
    const mockPost: Post = {
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
    };
    wrapper = shallow(
      <Item
        post={mockPost}
        onDeletePost={() => {}}
        postToDelete={mockPost.id}
        isDeleting={false}
      />
    );
  });

  it('shows Post title', () => {
    expect(wrapper.find('[data-test="post-title"]')).toHaveLength(1);
  });

  it('shows Post description', () => {
    expect(wrapper.find('[data-test="post-desc"]')).toHaveLength(1);
  });

  it('shows a modified date', () => {
    expect(wrapper.find('[data-test="post-modified-date"]')).toHaveLength(1);
  });

  it('shows the edit button with the right path', () => {
    const editPostBtn = wrapper.find('[data-test="edit-post-btn"]');
    expect(editPostBtn).toHaveLength(1);
    expect(editPostBtn.props().to).toEqual('/post/edit/1');
  });
});
