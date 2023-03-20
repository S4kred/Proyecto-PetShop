import "./Header.scss"
import { Container, Col, Row, Button } from "react-bootstrap"
import useAuth from "../../hooks/useAuth"


const Header = () => {

  const { cerrarSesion } = useAuth()
  return (
    <header className="header-cliente">
      <Container>
        <Row>
          <Col sm={8}>
            <h1>
            <span className="spanheader">Registra a tu mascota</span>{' '}y realiza el pedido
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

export default Header

