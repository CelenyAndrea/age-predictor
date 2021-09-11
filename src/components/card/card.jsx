import React from 'react';
import styles from './card.module.css';

export default function Card({name, age, country_id, onClose}) {
  return (
    <div className={styles.card}>
      <button onClick={onClose} className={styles.boton}>x</button>
      <div>
        <h5 className={styles.titulo}>{name}</h5>
      </div>
      <div>
        <div className={styles.container}>
          <div className={styles.elemento}>
            <h2>Age: {age}</h2>
          </div>
          <div className={styles.elemento}>
            <h2>{country_id}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};