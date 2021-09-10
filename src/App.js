import React, { useState } from 'react';
import Nav from './components/nav/Nav'
import { Route } from 'react-router-dom';
import Cards from './components/cards/Cards';

import './App.css';

function App() {
  const [names, setNames] = useState([]);

  function onSearch(nombre, localidad) {
    //Llamado a la API
    if(nombre && localidad) {
      fetch(`https://api.agify.io?name=${nombre}&country_id=${localidad}`)
        .then(r => r.json())
        .then((res) => {
          console.log(res)
          if(res !== undefined){
            const localidad = {
              name: res.name,
              age: res.age,
              id: res.count,
              country: res.country_id
            };
            setNames(oldNames => [...oldNames, localidad])
          }
      });

    }else if(nombre) {
      fetch(`https://api.agify.io?name=${nombre}`)
        .then(r => r.json())
        .then((res) => {
          console.log(res)
          if(res !== undefined){
            const nombre = {
              name: res.name,
              age: res.age,
              id: res.count,
              country: res.country_id
            };
            setNames(oldNames => [...oldNames, nombre])
          }
        });

    }else{
      alert("Nombre no encontrado");
    }
  }

  function onClose(name) {
    setNames(oldNames => oldNames.filter(n => n.id !==name));
  }

  return (
    <div className="App">
      <Route 
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      <Route 
        exact path='/'
        render={() => <Cards names={names} onClose={onClose} />}
      />
    </div>
  );
}

export default App;
