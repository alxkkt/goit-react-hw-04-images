import React from 'react';

import styles from './Button.module.css';

interface IProps {
  text: string;
  loadMore: () => void;
}

const Button = ({ text, loadMore }: IProps) => {
  return (
    <button onClick={loadMore} className={styles.Button}>
      {text}
    </button>
  );
};

export default Button;
