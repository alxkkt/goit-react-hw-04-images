import React from 'react';

import styles from './ImageGalleryItem.module.css';

interface Props {
  url: string;
  onClick: () => void;
}

const ImageGalleryItem = ({ url, onClick: handleClick }: Props) => {
  return (
    <li className={styles.ImageGalleryItem} onClick={handleClick}>
      <img
        className={styles.ImageGalleryItemImage}
        src={url}
        alt="Small example"
      />
    </li>
  );
};

export default ImageGalleryItem;
