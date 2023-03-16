import "./HeaderVendedor.scss"
import { Container, Col, Row, Button } from "react-bootstrap"
import useAuth from "../../hooks/useAuth"


const HeaderVendedor = () => {

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
            <Button variant="link" onClick={cerrarSesion}>Cerrar Sesión</Button>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default HeaderVendedor