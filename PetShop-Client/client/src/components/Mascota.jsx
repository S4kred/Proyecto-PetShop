import { Card, Button } from "react-bootstrap"
import usePedidos from "../hooks/usePedidos";

const Mascota = ({mascota}) => {


    const { crearPedido } = usePedidos()

    const { tipo, nombre, cantidadAlimento, complementosDietarios, usuario, _id } = mascota;
    const pedido = {tipo, cantidadAlimento, complementosDietarios, usuario, nombre}

  return (
    <Card>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Necesita {cantidadAlimento} Kg de alimento para {tipo} y {complementosDietarios} suplemento/suplementos dietario/dietarios.
        </Card.Text>
        <Button variant="primary" type='submit' onClick={() => crearPedido(pedido)}>Pedir</Button>
      </Card.Body>
    </Card>
  );
}

export default Mascota;

