import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export const CustomModal = props => {
  return (
      <Modal className={props.modalClass} isOpen={props.modal} toggle={props.toggleModal}>
        <ModalHeader toggle={props.toggleModal} className={props.className}><strong>{props.title}</strong></ModalHeader>
        <ModalBody>{props.children}</ModalBody>
      </Modal>
  );
};

export default CustomModal;
