import { useState } from 'react'
import { Col, Container } from  "react-bootstrap";
import MascotasContext from '../../context/MascotasProvider';
import useMascotas from '../../hooks/useMascotas';
import Mascota from '../Mascota';

import "./ListadoMascotas.scss"

export default function ListadoMascotas() {
  
  const { mascotas } = useMascotas()

  console.log(mascotas)

  return (
    <>
      { mascotas.length ? ( 
          <>
            <h4>Lista de Mascotas</h4>
            {mascotas.map( mascota => (
              <Mascota 
                key={mascota._id}
                mascota={mascota}
              />
            ))}
          </>
        ) : 
        ( 
          <>
            <h2>No tienes mascotas registradas</h2>
            <p>Agrega macotas {' '}<span>y aparecerán en este lugar</span></p>
          </>
        )
      }
    </>  
  );
}



