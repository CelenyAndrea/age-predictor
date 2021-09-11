import React from 'react';
import {Link} from 'react-router-dom';
import style from './landingPage.module.css'

function LandingPage() {
    return (
      <div className={style.landingpage}>
        <div className={style.msgContainer}>
          <p className={style.title}>Predictor de Edad a través del nombre </p>
          <p className={style.text}>¡Tiene la opción de mejorar la precisión con la localización, solo recuerde colocar el <a href="https://agify.io/our-data">codigo ISO</a> del pais que quiere consultar!</p>
          <Link to='/nav'>
            <button className={style.button} type='submit'>Entrar</button>
          </Link>
        </div>
      </div>
    );
}
  
export default LandingPage;