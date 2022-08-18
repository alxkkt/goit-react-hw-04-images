import React from 'react';

import { Item } from '../../App';

import ImageGalleryItem from './ImageGalleryItem';

import styles from './ImageGallery.module.css';

interface IProps {
  items?: Item[];
  onClick: (param: string) => void;
  children?: JSX.Element;
}

const ImageGallery = ({ items = [], onClick, children }: IProps) => {
  const elements = items.map(item => (
    <ImageGalleryItem
      key={item.id}
      url={item.webformatURL}
      onClick={() => onClick(item.largeImageURL)}
    />
  ));
  return (
    <>
      <ul className={styles.ImageGallery}>{elements}</ul>
      {children}
    </>
  );
};

export default ImageGallery;
