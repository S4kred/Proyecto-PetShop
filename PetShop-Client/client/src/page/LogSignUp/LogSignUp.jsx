import React, { useState } from 'react';
import { Container, Row, Col, Button } from  "react-bootstrap";
import "./LogSignUp.scss";
import BasicModal from '../../components/Modal/BasicModal/BasicModal';
import RegistroCliente from '../../components/RegistroCliente';

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
                    <ComponenteVendedor openModal={openModal} setShowModal={setShowModal} />
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
        <Col md="auto">
            <h1 className="logo">PetShop</h1>
        </Col>
    );
}

function ComponenteVendedor(props) {
    const { openModal, setShowModal} = props;

    return (
        <Col className="logsignup__vendedor" xs >
            
            <div>
                <h1>Sos <br/>vendedor ?</h1>
                <div className="button-container">
                <Button variant="primary" onClick={() => openModal(<h2>Formulario de Registro</h2>)} >Regístrate</Button>
                <Button variant="outline-primary" onClick={() => openModal(<h2>Formulario de iniciar sesión</h2>)} >Iniciar sesión</Button>
                </div>
            </div>
        </Col>
    );
}

function ComponenteCliente(props) {
    const { openModal, setShowModal} = props;

    return (
        <Col className="logsignup__cliente" xs >
            <div>
                <h1>Sos <br/>cliente ?</h1>
                <div className="button-container">
                <Button variant="primary" onClick={() => openModal(<RegistroCliente setShowModal={setShowModal} />)} >Regístrate</Button>
                <Button variant="outline-primary" onClick={() => openModal(<h2>Formulario de iniciar sesión</h2>)}>Iniciar sesión</Button>
                </div>
            </div>
        </Col>
    );
}
