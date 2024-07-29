import React from "react";
import { createPortal } from "react-dom";
import PrimaryButton from "./PrimaryButton";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  zIndex: 1000,
  width: "80%",
  maxWidth: "500px",
  margin: "0 auto",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
};

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div
        className="p-10 rounded-lg flex flex-col gap-4 items-center"
        style={MODAL_STYLES}
      >
        {children}
        <PrimaryButton onClick={onClose}>Cerrar</PrimaryButton>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
