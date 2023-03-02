import React, { useState } from 'react';
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { Toast } from 'react-bootstrap';

import "./RegistroCliente.scss";

export default function RegistroCliente(props) {
  const { setShowModal } = props;
  const [formData, setFormData] = useState(clienteFormValue());

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className='sign-up-form'>
      <h2>Crea tu cuenta de cliente</h2>
      <Form className='form-group' onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type='text' placeholder='Nombre' name="nombre" defaultValue={formData.nombre} />
            </Col>
            <Col>
              <Form.Control type='text' placeholder='Apellido' name="apellido" defaultValue={formData.apellido} />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Control type='email' placeholder='Correo electrónico' name="email" defaultValue={formData.email} />
        </Form.Group>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type='password' placeholder='Contraseña' name="password" defaultValue={formData.password} />
            </Col>
            <Col>
              <Form.Control type='password' placeholder='Repetir contraseña' name="repeatPassword" defaultValue={formData.repeatPassword} />
            </Col>
          </Row>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Crear cuenta
        </Button>
      </Form>
    </div>
  )
}


function clienteFormValue() {
  return{
    tipo: "Cliente",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    repeatPassword: ""
  };
}