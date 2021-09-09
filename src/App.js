import React, { useState, useEffect } from 'react';
import Nav from './components/nav/Nav'
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  const [names, setNames] = useState([]);

  function onSearch(name) {
    //Llamado a la API
    fetch(`https://api.agify.io?name=${name}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const name = {
            name: recurso.name,
            age: recurso.age,
            id: recurso.count,
            country: recurso.country_id
          };
          setNames(oldNames => {
            let checkIfExistName = oldNames.findIndex(i => i.id === name.id);
              return checkIfExistName > -1 ? [...oldNames] : [...oldNames, name]
          });
        }else {
          alert("Nombre no encontrado");
        }
      });
  }

  function onClose(id) {
    setNames(oldNames => oldNames.filter(n => n.id !== id));
  }

  function onFilter(nameId) {
    let name = names.filter(c => c.id === parseInt(nameId));
    if(name.length > 0) {
        return name[0];
    } else {
        return null;
    }
  }


  return (
    <div className="App">
      <Route 
        path='/'
        render={() => <Nav onSearch={onSearch} />}
      />
      {/* <Route 
        exact path='/'
        render={() => <Cards cities={names} onClose={onClose} />}
      />
      <Route 
        exact path='/name/:nameId'
        render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />}
      /> */}
    </div>
  );
}

export default App;
