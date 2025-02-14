import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" data-testid="modal">
            <div className="modal-content">
                <button className="close-btn" data-testid="close-modal-btn" onClick={onClose}>
                    &times;
                </button>
                <h2 style={{ color: 'red' }}>{title}</h2>
                <div className="modal-body">{children}</div>
            </div>
        </div>
    );
};

export default Modal;