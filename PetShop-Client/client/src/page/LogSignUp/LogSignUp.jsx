import React, { useState } from 'react';
import { Container, Row, Col, Button } from  "react-bootstrap";
import "./LogSignUp.scss";
import BasicModal from '../../components/Modal/BasicModal/BasicModal';
import RegistroCliente from '../../components/RegistroCliente';
import LoginForm from "../../components/LoginForm";
import PetShop from "../../assets/logo.png";

import './LogSignUp.scss';

export default function LogSignUp() {
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);

    const openModal = content => {
        setShowModal(true);
        setContentModal(content);
    };

    return (
        <>
            <Container className="logsignup" fluid>
                <Row>
                    <NombreLogo />
                    <ComponenteCliente openModal={openModal} setShowModal={setShowModal} />
                </Row>
            </Container>
            <BasicModal show={showModal} setshow={setShowModal}>
                {contentModal}
            </BasicModal>    
        </>
    );
}


function NombreLogo () {
    return (
        <Col className='col-logo' md="auto">
            <img className='logoPng' src={PetShop} />
            <h1 className="logo">PetShop</h1>
        </Col>
    );
}

function ComponenteCliente(props) {
    const { openModal, setShowModal} = props;

    return (
        <Col className="logsignup__cliente" xs >
            <div>
                <h1>Bienvenido a Pet-Shop!<br/>Si sos cliente inicia sesión,<br/>si no, puedes registrarte.</h1>
                <div>
                <Button variant="primary" onClick={() => openModal(<RegistroCliente setShowModal={setShowModal} />)} >Regístrate</Button>
                <Button variant="outline-primary" onClick={() => openModal(<LoginForm setShowModal={setShowModal} />)}>Iniciar sesión</Button>
                <p>Vendedor: vendedor@petshop.com <br />Password: 123456</p>
                </div>
            </div>
        </Col>
    );
}


/*
Este código importa varios módulos de React y Bootstrap, 
así como algunos componentes personalizados. 
Luego, define un componente llamado LogSignUp que renderiza 
una estructura de contenedor y fila con tres columnas. 
Dos de estas columnas contienen botones que, al hacer clic en ellos, 
abren un modal correspondiente a la acción de 
"iniciar sesión" o "registrarse" como cliente o vendedor.

El componente LogSignUp también contiene un estado local que 
se actualiza cuando se abre el modal y cuando se define su contenido. 
Finalmente, se utiliza un componente de modal personalizado 
llamado BasicModal para renderizar el contenido del modal en la pantalla.

Además, hay dos componentes adicionales definidos, 
NombreLogo y ComponenteVendedor/ComponenteCliente, 
que renderizan un logotipo y la estructura de botones 
en cada una de las dos columnas respectivas.
*/