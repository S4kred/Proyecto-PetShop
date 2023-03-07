import React, { useState } from 'react';
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { isEmailValid } from '../../utils/validations';

import "./RegistroCliente.scss";
import { toast } from 'react-toastify';

export default function RegistroCliente(props) {
  const { setShowModal } = props;
  const [formData, setFormData] = useState(clienteFormValue());
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
            {!loading ? "Cear cuenta" : <Spinner animation="border" />}
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

/*
Este código es un componente de React llamado "RegistroCliente" 
que define un formulario para que los usuarios se registren como 
clientes en una aplicación. El componente importa varias librerías 
de Bootstrap, así como algunas funciones de validación de lodash 
y validaciones personalizadas definidas en el archivo "utils/validations.js".

El componente define el estado inicial del formulario con el 
método useState() y una función clienteFormValue() que devuelve 
un objeto con valores iniciales para los campos del formulario. 
También define una función onSubmit() que se encarga de validar 
los datos ingresados por el usuario y mostrar mensajes de error 
si es necesario. Si los datos son válidos, la función muestra una 
notificación de éxito y cierra el modal de registro.

El componente también define una función onChange() que se encarga 
de actualizar el estado del formulario cuando los usuarios ingresan datos.

Por último, el componente renderiza el formulario usando la librería 
de Bootstrap y muestra un botón "Crear cuenta" que se activa o desactiva 
según el estado de carga.
*/
