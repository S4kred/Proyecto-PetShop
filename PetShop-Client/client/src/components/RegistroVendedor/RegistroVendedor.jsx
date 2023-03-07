import React, { useState } from 'react'
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { isEmailValid } from '../../utils/validations';

import "./RegistroVendedor.scss";
import { toast } from 'react-toastify';

export default function RegistroVendedor(props) {
  const { setShowModal } = props;
  const [formData, setFormData] = useState(vendedorFormValue());
  const [loading, setloading] = useState(false);

  const onSubmit = e => {   
    e.preventDefault();
    console.log(formData);

    let validCount = 0;
    values(formData).some(value => {
      value && validCount++;
      return null
    });

    if(validCount !== size(formData)) {
      toast.warning("Completa todos los campos del formulario")
    } else {
      if(!isEmailValid(formData.email)) {
        toast.warning("Email inválido")
      } else if(formData.password !== formData.repeatPassword) {
        toast.warning("Las contraseñas tienen que ser iguales")
      } else if(size(formData.password) < 6) {
        toast.warning("La contraseña tiene que tener al menos 6 caracteres")
      } else {
        setloading(true);
        toast.success("Formulario correcto")
        setShowModal(false);
        setFormData(initialFormValue());
      }
    }
  };

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className='sign-up-form'>
      <h2>Crea tu cuenta de vendedor</h2>
      <Form className='form-group' onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Nombre" name="nombre" defaultValue={formData.nombre} />
            </Col>
            <Col>
              <Form.Control type="text" placeholder="Apellido" name="apellido" defaultValue={formData.apellido} />
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

        <Button variant="primary" type="submit">
          {!loading ? "Cear cuenta" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}


function vendedorFormValue() {
  return {
    tipo: "Vendedor",
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    repeatPassword: ""
  }
}