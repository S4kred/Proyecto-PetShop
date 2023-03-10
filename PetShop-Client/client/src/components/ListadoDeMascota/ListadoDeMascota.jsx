import React, { useState } from 'react'
import { Container, Row, Col, Button } from  "react-bootstrap";
import "./ListadoDeMascota.scss"


export default function RegistroMascota() {
  

  return (
    <Col className='col-1'>
      <Container>
        <Row>
          <Col>
            <h4>Nombre de mascota</h4>
          </Col>
          <Col>
            <h4>Combo que necesita</h4>
          </Col>
          <Col>
            <h5></h5>
          </Col>
          <Col>
            <h5></h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6>ejemplo: fluffy</h6>
          </Col>
          <Col>
            <p>Necesita 5 kilos de alimento y dos complementos dietarios</p>
          </Col>
          <Col>
            <Button variant='primary'>Realizar Pedido</Button>
            <Button variant='primary'>Eliminar mascota</Button>
          </Col>
          
        </Row>
      </Container>
    </Col>
  );
}



