import React from "react";
import { Modal } from "react-bootstrap";
import TablesSection from "./tablesSection";

const ModalListSection = ({ show, onHide, getDetailSection }) => {
  return (
    <Modal show={show} onHide={onHide} size="xl">
      <Modal.Header>List Section</Modal.Header>
      <Modal.Body>
        <TablesSection data={getDetailSection()} />
      </Modal.Body>
    </Modal>
  );
};

export default ModalListSection;
