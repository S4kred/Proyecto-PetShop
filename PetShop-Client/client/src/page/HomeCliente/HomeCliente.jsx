import { Container, Row, Col } from  "react-bootstrap";
import FormularioMascota from "../../components/FormularioMascota/"
import ListadoDeMascotas from "../../components/ListadoDeMascota"

import "./HomeCliente.scss"

export default function HomeCliente() {


  return (
    <>
      <Container className="home-cliente" fluid>
        <Row className='row-1'>
          <FormularioMascota />
          <ListadoDeMascotas />
        </Row>
      </Container>  
    </>
  )
}

