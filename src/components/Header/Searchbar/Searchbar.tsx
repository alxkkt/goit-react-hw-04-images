import React, { useState, memo } from 'react';

import styles from './Searchbar.module.css';

interface IProps {
  onSubmit: (param: string) => void;
}

const Searchbar = ({ onSubmit }: IProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(query);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setQuery(value);
  };
  
  return (
    <form className={styles.SearchForm} onSubmit={handleSubmit}>
      <button type="submit" className={styles.SearchFormButton}>
        <span className={styles.SearchFormButtonLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        name={query}
        autoComplete="off"
        autoFocus
        onChange={handleChange}
        placeholder="Search images and photos"
      />
    </form>
  );
};

export default memo(Searchbar);
