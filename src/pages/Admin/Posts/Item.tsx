import React from 'react';
import { Post } from 'actions';
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';

type ItemProps = {
  post: Post;
  onDeletePost: (id: number) => void;
  postToDelete: number;
  isDeleting: boolean;
};

const Item: React.FC<ItemProps> = React.memo(
  ({ post, onDeletePost, postToDelete, isDeleting }) => {
    return (
      <Card
        className={`mb-4 ${
          isDeleting && postToDelete === post.id ? `text-muted` : ``
        }`}
      >
        <Card.Body>
          <Card.Title data-test="post-title">{post.title.rendered}</Card.Title>
          <Card.Text
            data-test="post-desc"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <footer data-test="post-modified-date" className="blockquote-footer">
            {moment(post.modified).fromNow()}
          </footer>
        </Card.Body>
        <Card.Footer>
          <Link data-test="edit-post-btn" to={`/post/edit/${post.id}`}>
            <Button variant="link">Edit</Button>
          </Link>
          <Button
            variant="link"
            className="text-danger"
            data-test="delete-post-btn"
            onClick={() => {
              onDeletePost(post.id);
            }}
          >
            Delete
          </Button>
        </Card.Footer>
      </Card>
    );
  }
);

export default Item;
