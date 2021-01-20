import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Administar from './components/Administrar';
import './App.css';

function App() {

  // Compruebo si hay citas almacenadas.
  let initialCitas = JSON.parse(localStorage.getItem('citas'));

  // State principal para generar la cita.
  if(!initialCitas){
    initialCitas  = [];
  }

  const [citas, setCitas] = useState(initialCitas);
  

  // Para cuando el state cambia.
  useEffect( () => {
    localStorage.setItem('citas', JSON.stringify(citas))
  }, [citas])

  // Funcion que modifica el state.
  const createCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  // Función de eliminar la cita.
  const deleteCita = id => {

    const newCitas =  citas.filter( cita => cita.id !== id);

    setCitas(newCitas);
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay Citas' : 'Administrar Citas';
   

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>

      <div className= 'container'>
        <div className = 'row'>
        <div className = 'one-half column'>
          <Formulario 
            createCita = {createCita}
          />
        </div>
        <div className = 'one-half column'>
            <h2>{titulo}</h2>
      
            {citas.map( cita => (
              <Administar 
                key = {cita.id} 
                cita = {cita}
                deleteCita = {deleteCita}
              />
            ))}
        </div>
        </div>
      </div>
    </Fragment>
   
  );
}

export default App;
