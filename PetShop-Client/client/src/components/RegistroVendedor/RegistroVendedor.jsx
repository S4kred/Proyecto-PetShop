import React, { useState } from 'react'
import { Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { isEmailValid } from '../../utils/validations';
import clienteAxios from '../../config/axios';
import { toast } from 'react-toastify';


import "./RegistroVendedor.scss";

export default function RegistroVendedor(props) {
  const { setShowModal } = props;
  const [formData, setFormData] = useState(vendedorFormValue());
  const [loading, setloading] = useState(false);

  const onSubmit = async e => {   
    e.preventDefault();
    

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
        try {
          const userTemp = {
            ...formData,
            email: formData.email.toLowerCase(),
          };
          delete userTemp.repeatPassword;

          const respuesta = await clienteAxios.post("/usuarios", userTemp)
          console.log(respuesta)
          setloading(false);
          setShowModal(false);
          toast.success("El registro fue correcto");

        } catch (error) {
          console.log(error)
        }
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
      <Button variant='link' className='x' onClick={() => {setShowModal(false)}}>X</Button>
    </div>
  );
}


function vendedorFormValue() {
  return {
    tipovendedor: true,
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    repeatPassword: ""
  }
}