import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postsSelector } from 'selectors';
import { fetchPosts, Post } from 'actions';
import Layout from 'pages/Layout/Layout';
import Article from './Article';
import './Home.css';

const Home: React.FC = () => {
  const [isFetching, setFetching] = useState(false);

  const posts = useSelector(postsSelector);
  const dispatch = useDispatch();

  console.log('Posts', posts);

  useEffect(() => {
    setFetching(true);
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts.length > 0) {
      setFetching(false);
    }
  }, [posts]);

  return (
    <Layout>
      <div className="post-list">
        {isFetching && <div>Loading...</div>}

        {posts &&
          posts.length > 0 &&
          posts.map((post: Post) => <Article key={post.id} post={post} />)}

        {/* {posts && posts.length === 0 && !isFetching && (
          <div className="no-posts">No posts found.</div>
        )} */}
      </div>
    </Layout>
  );
};

export default Home;
