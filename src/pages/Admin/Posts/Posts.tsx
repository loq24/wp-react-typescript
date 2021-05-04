import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useMsgSelector, useWpSelector } from "selectors";
import { fetchPosts, deletePost } from "actions";
import Placeholder from "components/Placeholder/Placeholder";
import { Alert } from "react-bootstrap";
import PostModal from "./PostModal";
import PostList from "./PostList";

const Posts: React.FC = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [warningMsgStatus, setWarningMsgStatus] = useState(false);
  const [postToDelete, setPostToDelete] = useState(0);
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
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
      })
    );
    setModalStatus(false);
  };

  const hideModal = () => {
    setModalStatus(false);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="posts-content">
      <h1>All Posts</h1>
      {warning && warningMsgStatus && (
        <Alert
          variant="warning"
          onClose={() => setWarningMsgStatus(false)}
          dismissible
        >
          {warning}
        </Alert>
      )}
      <div className="mt-3">
        {posts.length > 0 ? (
          <PostList
            posts={posts}
            onDeletePost={onDeletePost}
            postToDelete={postToDelete}
            isDeleting={isDeleting}
          />
        ) : (
          <Placeholder />
        )}
        <PostModal
          isOpen={modalStatus}
          hideModal={hideModal}
          handlePostDeletion={handlePostDeletion}
        />
      </div>
    </div>
  );
};

export default Posts;
