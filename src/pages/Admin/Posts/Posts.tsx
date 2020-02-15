import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMsgSelector, useWpSelector } from 'selectors';
import { Post, fetchPosts, deletePost } from 'actions';
import Item from './Item';
import Placeholder from 'components/Placeholder/Placeholder';
import { Modal, Button, Alert } from 'react-bootstrap';

const Posts: React.FC = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [warningMsgStatus, setWarningMsgStatus] = useState(false);
  const [postToDelete, setPostToDelete] = useState();
  const [isDeleting, setDeletingStatus] = useState(false);

  const dispatch = useDispatch();
  const { posts } = useWpSelector();
  const { warning } = useMsgSelector();

  const onDeletePost = React.useCallback((id: number) => {
    setModalStatus(true);
    setPostToDelete(id);
  }, []);

  const handlePostDeletion = () => {
    setDeletingStatus(true);
    dispatch(
      deletePost(postToDelete, () => {
        setWarningMsgStatus(true);
        setDeletingStatus(false);
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      })
    );
    setModalStatus(false);
  };

  const renderModal = (): JSX.Element => {
    return (
      <Modal
        data-test="delete-modal"
        show={modalStatus}
        onHide={() => setModalStatus(false)}
      >
        <Modal.Header>Confirmation</Modal.Header>
        <Modal.Body>Do you really want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="link"
            className="text-danger"
            onClick={handlePostDeletion}
          >
            Yes
          </Button>
          <Button variant="primary" onClick={() => setModalStatus(false)}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const renderPosts = (posts: Post[]): JSX.Element[] => {
    return posts.map((post: Post, i: number) => {
      return (
        <Item
          post={post}
          key={i}
          onDeletePost={onDeletePost}
          postToDelete={postToDelete}
          isDeleting={isDeleting}
        />
      );
    });
  };

  const renderWarningMsg = (): JSX.Element => {
    return (
      <Alert
        variant="warning"
        onClose={() => setWarningMsgStatus(false)}
        dismissible
      >
        {warning}
      </Alert>
    );
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="posts-content">
      <h1>All Posts</h1>
      {warning && warningMsgStatus && renderWarningMsg()}
      <div className="mt-3">
        {renderModal()}
        {posts.length > 0 ? renderPosts(posts) : <Placeholder />}
      </div>
    </div>
  );
};

export default Posts;
