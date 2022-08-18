import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

interface IProps {
  close: () => void;
  children: JSX.Element | JSX.Element[];
}

const Modal = ({ close, children }: IProps) => {
    const onEscPress = (e: any) => {
    if (e.target === e.currentTarget) {
      close();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  });
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  return createPortal(
    <div className={styles.Overlay} onClick={closeModal}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    modalRoot as HTMLElement,
  );
};

export default Modal;
