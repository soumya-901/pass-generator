"use client";
import React from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon
import "./Modal.css";

const Modal = ({ question, answer, onClose }) => {
  const handleCloseModal = (e) => {
    // Check if the click target is the modal overlay
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal">
        <div className="modal-header">
          <h2 className="text-lg font-bold">{question}</h2>
          <button className="close-btn" onClick={onClose}>
            <FaTimes color="#006BB2" />
          </button>
        </div>
        <div className="modal-content">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
