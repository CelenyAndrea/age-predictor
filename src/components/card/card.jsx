import React from 'react';
import styles from './card.module.css';

export default function Card({name, age, country_id, onClose}) {
  return (
    <div className={styles.card}>
      <button onClick={onClose} className={styles.boton}>x</button>
      <div>
        <h5 className="card-title">{name}</h5>
      </div>
      <div>
        <div className={styles.container}>
          <div>
            <p>Age</p>
            <p>{age}</p>
          </div>
          <div>
            <p>{country_id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};