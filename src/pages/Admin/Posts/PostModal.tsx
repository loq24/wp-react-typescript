import React from 'react';
import { Modal, Button } from 'react-bootstrap';

type ModalProps = {
  isOpen: boolean;
  hideModal: () => void;
  handlePostDeletion: () => void;
};

const PostModal: React.FC<ModalProps> = ({
  isOpen,
  hideModal,
  handlePostDeletion
}) => {
  return (
    <Modal data-test="delete-modal" show={isOpen} onHide={hideModal}>
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
        <Button variant="primary" onClick={hideModal}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PostModal;
