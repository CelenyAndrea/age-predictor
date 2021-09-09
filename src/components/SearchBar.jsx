import React, {useState} from 'react';
import styles from '../components/nav/nav.module.css'

export default function SearchBar({onSearch}) {
  const [name, setName] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(name);
      setName("");
    }}>
      {/* <div className={styles.container}> */}
      <input
        type="text" 
        placeholder="..." 
        value={name}
        onChange={e => setName(e.target.value)}
      />
      {/* <button className={styles.boton} onClick={() => onSearch("Buscando...")}>Agregar</button> */}
      <input className={styles.boton} type="submit" value="Agregar" />
      {/* </div> */}
    </form>
  );
}