import React from 'react';
import Card from '../card/card';
import styles from './cards.module.css';

export default function Cards({names, onClose}) {
  if(names) {
    return (
      <div className={styles.container}>
        {names.map(nombre => <Card  
          key={nombre.id}
          name={nombre.name}
          age={nombre.age}
          onClose={() => onClose(nombre.id)}
          id={nombre.id}
        /> )}
      </div>
    );
  }else {
    return(
      <div >No hay Registro</div>
    )
  }  
}