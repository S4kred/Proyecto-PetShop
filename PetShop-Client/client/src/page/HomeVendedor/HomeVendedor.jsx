import React, { useState } from 'react'
import { Container, Row, Col, Button } from  "react-bootstrap";
import BasicModal from '../../components/Modal/BasicModal/BasicModal';
import PetShop from "../../assets/logo.png";
import RegistroVendedor from "../../components/RegistroVendedor";

import "./HomeVendedor.scss"

export default function HomeVendedor() {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = content => {
    setShowModal(true);
    setContentModal(content);
  };

  return (
    <>
      <Container className="home-vendedor" fluid>
        <h1>Estas en cuenta Vendedor</h1>
        <Row>
          <ComponenteVendedor openModal={openModal} setShowModal={setShowModal} />
          <Col><h2>Listado de Mascotas y Dueños</h2></Col>
          <Col><h2>Lista de pedidos recibidos / marcar despachados</h2></Col>
          <Col><h2>Listado de Vendedores</h2></Col>
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
          <img className='logoPng' src={PetShop} />
          <h1 className="logo">PetShop</h1>
      </Col>
  );
}

function ComponenteVendedor(props) {
  const { openModal, setShowModal} = props;

  return (
      <Col>
          <div>
              <h3>Cuenta vendedor</h3>
              <div>
              <Button variant="primary" onClick={() => openModal(<RegistroVendedor setShowModal={setShowModal} />)} >Crear cuenta vendedor</Button>
              </div>
          </div>
      </Col>
  );
}