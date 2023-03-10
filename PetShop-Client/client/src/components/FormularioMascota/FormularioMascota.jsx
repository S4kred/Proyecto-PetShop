import React, { useState } from 'react'
import { Row, Col, Button, Form, FloatingLabel } from  "react-bootstrap";
import { values, size } from "lodash"
import { toast } from "react-toastify"
import "./FormularioMascota.scss"


export default function FormularioMascota() {

  const [formData, setFormData] = useState(mascotaValores())

  const onSubmit = e => {
    e.preventDefault();

    console.log(formData)
  
    let validCount = 0;
    values(formData).some(value => {
      value && validCount++;
      return null
    });

    if(validCount !== size(formData)) {
      toast.warning("Completa todos los campos del formulario")
    } else {

      const mascota = formData;
      console.log(mascota)
  
    }
  
  };

  return (
    <Col className='col-form-mascota' >
      <h2 className='titulo-form-mascotas'>Datos de mascota</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Row className='row1-registro'>
            <Col md>
              <FloatingLabel label="Tipo">
                <Form.Select value={formData.tipo} aria-label="Floating label select example" onChange={e => setFormData({...formData, tipo: e.target.value})}>
                  <option>Selecciona si es perro/gato</option>
                  <option value="perro">Perro</option>
                  <option value="gato">Gato</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>                    
              <FloatingLabel label="Nombre de tu mascota"  >
                <Form.Control value={formData.nombre} type="text" onChange={e => setFormData({...formData, nombre: e.target.value})}/>
              </FloatingLabel>                    
            </Col>
          </Row>
          <Row className='row2-registro'>
            <Col md>
              <FloatingLabel label="Años"  >
                <Form.Control value={formData.años} type="number" min="0" max="25" onChange={e => setFormData({...formData, años: e.target.value})} />
              </FloatingLabel>
            </Col>
            <Col>                    
              <FloatingLabel className='peso' label="Peso en Kg"  >
                <Form.Control value={formData.peso} type="number" min="0" max="130" onChange={e => setFormData({...formData, peso: e.target.value})} />
              </FloatingLabel>                    
            </Col>
          </Row>
          <Row className='row3-registro'>
            <Col>
              <FloatingLabel label="Esta castrado ?">
                <Form.Select value={formData.castrado} aria-label="Floating label select example" onChange={e => setFormData({...formData, castrado: e.target.value})}>
                  <option>Selecciona si o no</option>
                  <option value="Si">Si</option>
                  <option value="No">No</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col>
              <Button className='buttonFormMascota' variant="primary" type='submit'>Agregar mascota</Button>
            </Col>
          </Row>   
        </Form.Group>
      </Form>
    </Col>
  );
}


function mascotaValores() {
  return {
    tipo: "",
    nombre: "",
    años: "",
    peso: "",
    castrado: ""
  }
}

