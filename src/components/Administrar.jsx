import React from 'react'


const Administrar = ({cita, deleteCita}) => ( 
    <div className = 'cita'>
        <p>Mascota: <span>{cita.pet}</span> </p>
        <p>Dueño: <span>{cita.ouner}</span> </p>
        <p>Fecha: <span>{cita.date}</span> </p>
        <p>Hora: <span>{cita.time}</span> </p>
        <p>Síntomas: <span>{cita.desc}</span> </p>

        <button
            className = 'button eliminar u-full-width'
            onClick = { () => deleteCita(cita.id) }
        >Eliminar &times;</button>
    </div>
 );

 
export default Administrar;