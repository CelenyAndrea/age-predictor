import React from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.css';

export default function Card({name, age, onClose}) {
  return (
    <div className={styles.card}>
      <button onClick={onClose} className={styles.boton}>x</button>
      <Link to={`/name/${name}`} >
        <h5 className="card-title">{name}</h5>
      </Link>
      <div>
        <div className={styles.container}>
          <div>
            <p>Age</p>
            <p>{age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};