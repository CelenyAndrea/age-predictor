import React from 'react';
import SearchBar from '../SearchBar.jsx';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className={styles.container}> 
      <Link to='/'>
        <h2 className={styles.titulo}>
          Age Predictor
        </h2>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;