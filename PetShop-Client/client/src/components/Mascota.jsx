import { Card, Button } from "react-bootstrap"

const Mascota = ({mascota}) => {

    const { tipo, nombre, cantidadAlimento, complementosDietarios, usuario, _id } = mascota
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Necesita {cantidadAlimento} kg/s de alimento para {tipo} y {complementosDietarios} complemento/s dietarios.
        </Card.Text>
        <Button variant="primary" type='submit'>Pedir</Button>
      </Card.Body>
    </Card>
  )
}

export default Mascota

