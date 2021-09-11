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
      <div className={styles.elemento} >
        <label>Nombre</label>
        <input
          type="text" 
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.elemento} >
        <label>Localización</label>
        <input
          type="text" 
          placeholder="Opcional..." 
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>
      <div className={styles.elemento} >
      <input type="submit" value="Calcular Edad" />
      </div>
    </form>
  );
}
