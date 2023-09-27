import React from "react";
import { Link } from "react-router-dom";
import "./modal.css";

function Modal({ open, close }) {
  if (!open) return null;
  return (
    <>
      <div className="overlay" onClick={close}>
        <div className="modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="modal-right">
            <p className="btn-close" onClick={close}>
              X
            </p>
          </div>
          <div className="modal-content">
            <p>
              Click Here For Sign Up <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
