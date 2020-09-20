import React from 'react';

type ModalProps = {
  title: string;
  visible: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
};

const Modal = ({ title, visible, onClose, children }: ModalProps) => {
  return visible ? (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <section className="modal-card-body">{children}</section>
        <footer className="modal-card-foot">
          <button className="button is-success">Checkout</button>
          <button className="button" onClick={onClose}>
            Close
          </button>
        </footer>
      </div>
    </div>
  ) : null;
};

export default Modal;
