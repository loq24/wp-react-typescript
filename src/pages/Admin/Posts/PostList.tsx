import React from 'react';
import Item from './Item';
import { Post } from 'actions';

type PostListProps = {
  posts: Post[];
  onDeletePost: (id: number) => void;
  postToDelete: number;
  isDeleting: boolean;
};

const PostList: React.FC<PostListProps> = ({
  posts,
  onDeletePost,
  postToDelete,
  isDeleting
}) => {
  return (
    <>
      {posts.map(post => {
        return (
          <Item
            post={post}
            key={post.id}
            onDeletePost={onDeletePost}
            postToDelete={postToDelete}
            isDeleting={isDeleting}
          />
        );
      })}
    </>
  );
};

export default PostList;
