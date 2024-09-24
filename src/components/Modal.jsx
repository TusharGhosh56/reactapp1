import React from "react";
import '../css/Modal.css'; // Add your modal styles here

const Modal = ({ showModal, content, onClose }) => {
  if (!showModal) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Program Details</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
