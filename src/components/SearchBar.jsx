import React, {useState} from 'react';
import styles from '../components/nav/nav.module.css'

export default function SearchBar({onSearch}) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(name, location);
      setName("");
      setLocation("");
    }}>
      <h2>Puede predecir la edad de un solo nombre o de varios</h2>
      <input
        type="text" 
        placeholder="Nombre..." 
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="text" 
        placeholder="Localización..." 
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <input className={styles.boton} type="submit" value="Predecir" />
    </form>
  );
}
