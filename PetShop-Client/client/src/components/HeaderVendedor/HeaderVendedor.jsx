import React, { useState } from 'react'
import "./HeaderVendedor.scss"
import { Container, Col, Row, Button } from "react-bootstrap"
import useAuth from "../../hooks/useAuth"
import BasicModal from '../Modal/BasicModal/BasicModal'
import RegistroVendedor from "../../components/RegistroVendedor";

const HeaderVendedor = () => {

  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = content => {
    setShowModal(true);
    setContentModal(content);
  };

  const { cerrarSesion } = useAuth()
  return (
    <header className="header-vendedor">
      <Container>
        <Row>
          <Col sm={8}>
            <h1>
            <span className="spanheader">Ventas</span>{' '} - PetShop 
            </h1>
          </Col>
          <Col sm={4}>
            <Button variant="link" onClick={() => openModal(<RegistroVendedor setShowModal={setShowModal} />)} >Crear cuenta</Button>
            <Button variant="link" onClick={cerrarSesion}>Cerrar Sesión</Button>
          </Col>
        </Row>
      </Container>
      <BasicModal show={showModal} setshow={setShowModal}>
        {contentModal}
      </BasicModal>
    </header>
  )
}

export default HeaderVendedor