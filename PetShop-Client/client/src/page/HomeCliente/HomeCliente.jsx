import { Container, Row, Col } from  "react-bootstrap";
import FormularioMascota from "../../components/FormularioMascota/"
import ListadoMascotas from "../../components/ListadoMascotas"

import "./HomeCliente.scss"

export default function HomeCliente() {


  return (
    <>
      <Container className="home-cliente" fluid>
        <Row>
          <FormularioMascota />
          <Col><ListadoMascotas /></Col>
        </Row>
      </Container>  
    </>
  )
}

