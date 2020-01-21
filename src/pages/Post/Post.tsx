import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postSelector } from 'selectors';
import { useParams } from 'react-router-dom';
import Layout from 'pages/Layout/Layout';
import { fetchPost } from 'actions';
import moment from 'moment';

const Post = () => {
  const { id } = useParams();
  const post = useSelector(postSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(fetchPost(id));
  }, [dispatch, id]);

  console.log('Post', post);

  return (
    <Layout>
      {post && (
        <article>
          <h1>{post.title.rendered}</h1>
          <small>{moment(post.modified).fromNow()}</small>
          <p>{post.content.rendered.replace(/<\/?[^>]+(>|$)/g, '')}</p>
        </article>
      )}
    </Layout>
  );
};

export default Post;
