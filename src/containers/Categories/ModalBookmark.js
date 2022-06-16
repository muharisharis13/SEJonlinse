import React from "react";
import { Modal } from "react-bootstrap";
import TableBooks from "../Books/tableBooks";

const ModalBookmark = ({ show, onHide, data }) => {
  return (
    <Modal show={show} onHide={onHide} size="xl">
      <Modal.Header>List Bookmark</Modal.Header>
      <Modal.Body>
        <TableBooks data={data} activeModalBookmark={show} />
      </Modal.Body>
    </Modal>
  );
};

export default ModalBookmark;
