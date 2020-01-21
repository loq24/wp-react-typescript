import React from 'react';
import { Post } from 'actions';
import { Link } from 'react-router-dom';
import moment from 'moment';

type ArticleProps = {
  post: Post;
};

const TEXT_MAX_LENGTH = 100;

const Article: React.FC<ArticleProps> = ({ post }) => {
  return (
    <article key={post.id}>
      <h3>
        <Link to={`/post/${post.id}`}>{post.title.rendered}</Link>
      </h3>
      <small>{moment(post.modified).fromNow()}</small>
      <p>
        {post.content.rendered
          .substr(0, TEXT_MAX_LENGTH)
          .replace(/<\/?[^>]+(>|$)/g, '')}
      </p>
    </article>
  );
};

export default Article;
