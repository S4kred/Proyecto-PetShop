import React, { useState, useContext } from 'react';
import {Form, Button, Spinner} from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations"
import clienteAxios from '../../config/axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./LoginForm.scss";


export default function LoginForm() {
  const [formData, setFormData] = useState(initialFormValue());
  const [loginLoading, setloginLoading] = useState(false);
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth()

  const onSubmit = async e => {
    e.preventDefault();

    let validCount = 0;
    values(formData).some(value => {
      value && validCount++
      return null;
    });

    if(size(formData) !== validCount) {
      toast.warning("Formulario incompleto");
    } else if(!isEmailValid(formData.email)) {
      toast.warning("Email inválido");
    } else {
      setloginLoading(true);
      try {
        const userTemp = {
          ...formData,
          email: formData.email.toLowerCase(),
        };
        
        const { data } = await clienteAxios.post("/usuarios/login", userTemp)
        localStorage.setItem('token', data.token)
        const tipovendedor = data.tipovendedor;
        setAuth(data)
        // Acceder al atributo deseado del usuario logueado
        setloginLoading(false)
        tipovendedor ? navigate('/vendedor') : navigate('/cliente')
      } catch (error) {
        toast.error(error.response.data.msg)
        setloginLoading(false)
      }
    }
  };

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in-form">
      <h2>Entrar</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Form.Control type='email' name='email' placeholder='Correo electrónico' defaultValue={formData.email} />
        </Form.Group>
        <Form.Group>
          <Form.Control type='password' name='password' placeholder='Contraseña' defaultValue={formData.password} />
        </Form.Group>
        <Button variant="primary" type="submit">
          {!loginLoading ? "Iniciar sesión" : <Spinner animation='border' /> }
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    email: "",
    password: ""
  };
}
