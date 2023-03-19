import { Card, Button } from "react-bootstrap"
import useMascotas from "../hooks/useMascotas";
import useAuth from "../hooks/useAuth";
import usePedidos from "../hooks/usePedidos";

const Mascota = ({mascota}) => {


    const { crearPedido } = usePedidos()

    const { tipo, nombre, cantidadAlimento, complementosDietarios, usuario, _id } = mascota;
    const pedido = {tipo, cantidadAlimento, complementosDietarios, usuario, nombre}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          Necesita {cantidadAlimento} kg/s de alimento para {tipo} y {complementosDietarios} complemento/s dietarios.
        </Card.Text>
        <Button variant="primary" type='submit' onClick={() => crearPedido(pedido)}>Pedir</Button>
      </Card.Body>
    </Card>
  );
}

export default Mascota;

