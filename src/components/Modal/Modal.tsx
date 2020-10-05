import React from 'react';

type ModalProps = {
  title: string;
  visible: boolean;
  onClose: () => void;
  header?: JSX.Element | JSX.Element[];
  content?: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
};

const Modal = ({ header, visible, onClose, content, footer }: ModalProps) => {
  return visible ? (
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">{header && header}</header>
        <section className="modal-card-body">{content}</section>
        <footer className="modal-card-foot">{footer && footer}</footer>
      </div>
    </div>
  ) : null;
};

export { Modal };
