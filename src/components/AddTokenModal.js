import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddTokenForm from "./AddTokenForm";

function AddTokenModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Token</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddTokenForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddTokenModal;
