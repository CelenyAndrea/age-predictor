import React from 'react';
import SearchBar from '../SearchBar.jsx';
import styles from './nav.module.css';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className={styles.container}> {/* id="divNav"> */}
      <Link to='/'>
        <span className={styles.titulo}>
          Age Predictor
        </span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;