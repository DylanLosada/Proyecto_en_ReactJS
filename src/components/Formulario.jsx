import React, {Fragment, useState} from 'react';
import uuid from 'uuid/v4'

const Formulario = ({createCita}) => {

    // State para pedir cita.
    const [cita, setCita] = useState({
        pet: '',
        ouner: '',
        date: '',
        time: '',
        desc: ''
    });

    // State para el mensaje de error.
    const [error, setError] = useState(false);

    const updateState = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const {pet, ouner, date, time, desc} = cita;

    const submitCita = (e) =>{
        e.preventDefault();

        // Valido los datos.
        if(pet.trim() === '' || ouner.trim() === '' || date.trim() === '' || time.trim() === '' || desc.trim() === ''){
            setError(true);
            return;
        }

        // Elimino el mensaje previo.
        setError(false);

        // Asigno un IDE.
        cita.id = uuid();

        // Creo la Cita.
        createCita(cita);

        // Reinicio el form.
        setCita({
            pet: '',
            ouner: '',
            date: '',
            time: '',
            desc: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className = 'alerta-error'>Todo los campos son obligatorios</p>  : null}

            <form
                onSubmit = {submitCita}
            >
                <label>Mascota Nombre: </label>
                <input
                    type = "text"
                    name = "pet" 
                    className  ='u-full-width'
                    placeholder = 'Nombre de su Mascota'
                    onChange = {(e) => updateState(e)}
                    value = {pet}
                />

                <label>Nombre Dueño: </label>
                <input
                    type = "text"
                    name = "ouner" 
                    className  ='u-full-width'
                    placeholder = 'Su nombre'
                    onChange = {(e) => updateState(e)}
                    value = {ouner}
                />

                <label>Fecha de cita: </label>
                <input
                    type = "date"
                    name = "date" 
                    className  ='u-full-width'
                    onChange = {(e) => updateState(e)}
                    value = {date}
                />

                <label>Hora de cita: </label>
                <input
                    type = "time"
                    name = "time" 
                    className  ='u-full-width'
                    onChange = {(e) => updateState(e)}
                    value = {time}
                />

                <label>Síntomas: </label>
                <textarea 
                    name = "desc" 
                    className  ='u-full-width'
                    onChange = {(e) => updateState(e)}
                    value = {desc}
                ></textarea>
                    
            <button type = 'submit'
                    className = 'u-full-width button-primary'
            >PEDIR</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;